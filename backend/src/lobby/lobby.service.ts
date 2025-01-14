import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lobby } from './lobby.entity';

@Injectable()
export class LobbyService {
  constructor(
    @InjectRepository(Lobby)
    private readonly lobbyRepository: Repository<Lobby>,
  ) {}

  findAll(): Promise<Lobby[]> {
    return this.lobbyRepository.find(); // Возвращает все лобби
  }

  create(name: string): Promise<Lobby> {
    const newLobby = this.lobbyRepository.create({ name }); // Создаёт объект
    return this.lobbyRepository.save(newLobby); // Сохраняет в базе данных
  }

  async remove(id: number): Promise<void> {
    const result = await this.lobbyRepository.delete(id); // Удаляет лобби по ID
    if (result.affected === 0) {
      throw new Error(`Lobby with ID ${id} not found`);
    }
  }
}