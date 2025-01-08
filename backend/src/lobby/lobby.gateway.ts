import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class LobbyGateway {
  @SubscribeMessage('joinLobby')
  handleJoinLobby(@MessageBody() data: { lobbyId: string }, @ConnectedSocket() client: Socket) {
    client.join(data.lobbyId);
    client.emit('joinedLobby', { message: `You joined lobby ${data.lobbyId}` });
  }
}