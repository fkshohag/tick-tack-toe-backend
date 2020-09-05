import { isNumber, isNull } from "util";
import { IsNumber, IsNotEmpty } from "class-validator";

export class NewActionDTO {
      @IsNumber()
      @IsNotEmpty()
      step: number

      @IsNumber()
      @IsNotEmpty()
      currentPlayer: number

      @IsNumber()
      nextPlayer: number

      @IsNumber()
      @IsNotEmpty()
      pressValue: number
}