/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './common/exceptions/rpc-custom-exception.filter';
import { envs } from './config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // Importa Swagger

async function bootstrap() {
  const logger = new Logger('Main-Gateway');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RpcCustomExceptionFilter());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Gateway')
    .setDescription('Gateway API documentation')
    .setVersion('1.0')  
    .addTag('gateway')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Ruta para acceder a Swagger

  await app.listen(envs.port);
  logger.log(`Gateway running on port ${envs.port}`);
}

bootstrap();
