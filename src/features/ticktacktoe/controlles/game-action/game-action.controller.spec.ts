import { Test, TestingModule } from '@nestjs/testing';
import { GameActionController } from './game-action.controller';

describe('GameActionController', () => {
  let controller: GameActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameActionController],
    }).compile();

    controller = module.get<GameActionController>(GameActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
