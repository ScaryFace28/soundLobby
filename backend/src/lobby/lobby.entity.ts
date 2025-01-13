import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Указывает, что это таблица базы данных
export class Lobby {
  @PrimaryGeneratedColumn() // Автоматически генерируемый идентификатор
  id: number;

  @Column({ nullable: false }) // Поле для имени лобби
  name: string;
}
