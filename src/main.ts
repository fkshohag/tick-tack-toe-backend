import { NestFactory } from '@nestjs/core';
import { loadConfig } from './envPath'
loadConfig()
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: true
  })
  await app.listen(3001);
}
bootstrap();
