import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { LobbyService } from './lobby.service';

@Controller('lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) {}

  @Get()
  getAllLobbies() {
    return this.lobbyService.findAll(); // Возвращает все лобби
  }

  @Post()
  createLobby(@Body() body: { name: string }) {
    return this.lobbyService.create(body.name); // Создаёт новое лобби
  }

  @Delete(':id')
  async deleteLobby(@Param('id') id: string) {
    await this.lobbyService.remove(+id); // Удаляет лобби по ID
    return { message: `Lobby with ID ${id} has been removed` };
  }
}