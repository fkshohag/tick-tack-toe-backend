import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { ActionService } from '../../services/ActionService';
import { NewActionDTO } from '../../dto/newaction.dto';

@Controller('game-action')
export class GameActionController {
      constructor(
            private action: ActionService
      ){
            
      }
      @Get()
      findAllAction() {
            return this.action.findAll()
      }

      @Post()
      createAction(@Body(ValidationPipe) action: NewActionDTO) {
            return this.action.createNewAction(action)
      }

      @Get('delete')
      deeleteAction() {
            return this.action.clear()
      }
}
