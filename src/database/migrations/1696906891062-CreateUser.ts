import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1696906891062 implements MigrationInterface {
    name = 'CreateUser1696906891062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("create_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "update_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "delete_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "username" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(255), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
