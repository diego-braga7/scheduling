import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAddress1697047962416 implements MigrationInterface {
    name = 'CreateAddress1697047962416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("create_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "update_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "delete_at" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "id" SERIAL NOT NULL, "road" character varying(50) NOT NULL, "number" character varying(10), "district" character varying(50) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
