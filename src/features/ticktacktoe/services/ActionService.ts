import { InjectRepository } from "@nestjs/typeorm";
import { ActionEntity } from '../entity/action.entity';
import { Repository } from 'typeorm';
import { NewActionDTO } from '../dto/newaction.dto';

export class ActionService {
      constructor(
            @InjectRepository(ActionEntity)
            public actionRepository: Repository<ActionEntity>,
      ) {}
      
      async findAll(): Promise<ActionEntity[]> {
            return await this.actionRepository.find();
      }

      async createNewAction(o:NewActionDTO): Promise<ActionEntity> {
            const a = this.actionRepository.create(o)
            await this.actionRepository.save(o)
            return a
      }

      async clear() {
            return await this.actionRepository.clear()
      }
}