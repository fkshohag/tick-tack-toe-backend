import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { TicktacktoeModule } from './features/ticktacktoe/ticktacktoe.module';
import { getDefaultDatabaseOption } from './configs/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getDefaultDatabaseOption() as TypeOrmModuleOptions),
    TicktacktoeModule
  ]
})
export class AppModule {}
