// app.module.ts

import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm'; //[added 2025-01-08 15:37]
import { AppController } from './app.controller'; //[added 2025-01-08 16:00]
import { AppService } from './app.service'; //[added 2025-01-08 16:00]
import { LobbyModule } from './lobby/lobby.module'; //[added 2025-01-08 15:50]

@Module({
  imports: [
    LobbyModule, //[added 2025-01-08 15:50]
    // TypeOrmModule.forRoot({ //[added 2025-01-08 15:37]
    //   type: 'postgres', //[added 2025-01-08 15:37]
    //   host: 'localhost', //[added 2025-01-08 15:37]
    //   port: 5432, //[added 2025-01-08 15:37]
    //   username: 'user', //[added 2025-01-08 15:37]
    //   password: 'password', //[added 2025-01-08 15:37]
    //   database: 'test_db', //[added 2025-01-08 15:37]
    //   autoLoadEntities: true, //[added 2025-01-08 15:37]
    //   synchronize: true, //[added 2025-01-08 15:37]
    // }), //[added 2025-01-08 15:37]
  ],
  controllers: [AppController], //[added 2025-01-08 16:00]
  providers: [AppService], //[added 2025-01-08 16:00]
})
export class AppModule {}