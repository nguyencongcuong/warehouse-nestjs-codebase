import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jose from 'jose';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  decodeJwt(jwt: string) {
    try {
      jwt = jwt.includes('Bearer') ? jwt.replace('Bearer', '').trim() : jwt;
      return jose.decodeJwt(jwt);
    } catch (e) {
      return null;
    }
  }

  async verifyAzureADB2CJwt(jwt) {
    try {
      const tenantName = this.configService.get('AZURE_B2C_TENANT_NAME');
      const policy = this.configService.get('AZURE_B2C_POLICY');
      const url = `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${policy}/discovery/v2.0/keys`;

      const jwkResponse = await axios.get(url);
      const jwk = jwkResponse.data.keys[0];
      const { alg } = jose.decodeProtectedHeader(jwt);

      const publicKey = await jose.importJWK(jwk, alg);
      const jwtVerifyResult = await jose.jwtVerify(jwt, publicKey);

      return jwtVerifyResult.payload;
    } catch (err) {
      return null;
    }
  }

  async verifyAzureADJwt(jwt) {
    try {
      // Retrieve Azure AD public keys
      const tenantId = this.configService.get('AZURE_AD_TENANT_ID');
      const clientId = this.configService.get('AZURE_AD_CLIENT_ID');

      const jwkResponse = await axios.get(
        `https://login.microsoftonline.com/${tenantId}/discovery/v2.0/keys?appid=${clientId}`
      );
      const publicKeys = jwkResponse.data.keys;

      // Decode the access token to extract the kid
      const jwtPayload = jose.decodeJwt(jwt);
      console.log(jwtPayload);
      const { kid, alg } = jose.decodeProtectedHeader(jwt);

      // Find the matching public key
      const jwk = publicKeys.find((key: any) => key.kid === kid);
      const publicKey = await jose.importJWK(jwk, alg);
      const result = await jose.jwtVerify(jwt, publicKey);
      return result.payload;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}
