import { Module } from '@nestjs/common';
import { LobbyController } from './lobby.controller';
import { LobbyService } from './lobby.service';
import { LobbyGateway } from './lobby.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lobby } from './lobby.entity'; // Импортируем сущность

@Module({
  imports: [TypeOrmModule.forFeature([Lobby])], // Подключаем сущность к модулю
  controllers: [LobbyController],
  providers: [LobbyService, LobbyGateway]
})
export class LobbyModule {}
