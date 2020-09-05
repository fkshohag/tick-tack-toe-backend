import { Module } from '@nestjs/common';
import { GameActionController } from './controlles/game-action/game-action.controller';
import { ActionService } from './services/ActionService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionEntity } from './entity/action.entity';

@Module({
      imports:[
            TypeOrmModule.forFeature([ActionEntity])
      ],
      controllers:[GameActionController],
      providers:[ActionService]
})
export class TicktacktoeModule {}
