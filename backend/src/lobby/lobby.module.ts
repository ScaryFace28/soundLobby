import { Module } from '@nestjs/common';
import { LobbyController } from './lobby.controller';
import { LobbyService } from './lobby.service';
import { LobbyGateway } from './lobby.gateway';

@Module({
  controllers: [LobbyController],
  providers: [LobbyService, LobbyGateway]
})
export class LobbyModule {}
