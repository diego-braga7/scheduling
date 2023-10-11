import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCollumnPost1696906804320 implements MigrationInterface {
  name = 'AddCollumnPost1696906804320';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_entity" ALTER COLUMN "createdAt" SET DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_entity" ALTER COLUMN "createdAt" DROP DEFAULT`,
    );
  }
}
