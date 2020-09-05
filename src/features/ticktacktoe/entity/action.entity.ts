import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ActionEntity {
      @PrimaryGeneratedColumn()
      id: number

      @Column()
      step: number

      @Column()
      currentPlayer: number

      @Column()
      nextPlayer: number

      @Column()
      pressValue: number
}