// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; //[added 2025-01-08 15:37]
import { AppController } from './app.controller'; //[added 2025-01-08 16:00]
import { AppService } from './app.service'; //[added 2025-01-08 16:00]
import { LobbyModule } from './lobby/lobby.module'; //[added 2025-01-08 15:50]

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest_user', // Пользователь базы данных
      password: 'nest_password', // Пароль базы данных
      database: 'lobby_db', // Имя базы данных
      autoLoadEntities: true, // Автоматическая загрузка сущностей
      synchronize: false, // Синхронизация структуры базы данных (только для разработки)
    }),
    LobbyModule, // Подключаем модуль лобби
  ],
  controllers: [AppController], //[added 2025-01-08 16:00]
  providers: [AppService], //[added 2025-01-08 16:00]
})
export class AppModule {}