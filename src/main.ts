import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'],
    cors: true,
    bodyParser: true,
  });

  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('Warehouse API')
    .setDescription('Warehouse API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Validate the incoming payload against a predefined class schema
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: false,
    })
  );

  // Middlewares
  app.use(helmet());

  await app.listen(3000);
}

bootstrap().then(() => console.log('Listening on PORT 3000'));
