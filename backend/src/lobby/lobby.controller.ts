import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('lobby')
export class LobbyController {
  private lobbies = [];  // Временный массив для хранения лобби

  @Get()
  getAllLobbies() {
    return this.lobbies;
  }

  @Post()
  createLobby(@Body() body: { name: string }) {
    const newLobby = { id: Date.now(), name: body.name };
    this.lobbies.push(newLobby);
    return newLobby;
  }
}