// data-source.cjs
const { DataSource } = require("typeorm");

module.exports = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "nest_user",
    password: "nest_password",
    database: "lobby_db",
    entities: ["dist/**/*.entity{.ts,.js}"], // Указываем путь к скомпилированным сущностям
    migrations: ["migrations/*.js"], // Указываем путь к миграциям
    synchronize: false, // Отключаем автоматическую синхронизацию
});