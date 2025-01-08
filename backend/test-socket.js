const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.emit('joinLobby', { lobbyId: '123' });

socket.on('joinedLobby', (message) => {
  console.log(message); // Ожидаемый вывод: "You have joined lobby 123"
});