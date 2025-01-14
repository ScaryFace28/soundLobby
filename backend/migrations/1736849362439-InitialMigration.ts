import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1736849362439 implements MigrationInterface {
    name = 'InitialMigration1736849362439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lobby" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "lobby" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lobby" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "lobby" ADD "name" character varying(255) NOT NULL`);
    }

}
