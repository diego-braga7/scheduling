import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class FirstMigration1696708119828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(new Table({
        //     name: 'user',
        //     columns: [{
        //         name: 'id',
        //         type: 'int',
        //         isPrimary: true,
        //         isUnique: true,
        //         isGenerated: true,
        //         isNullable: false
        //     },
        //     {
        //         name: 'username',
        //         type: 'varchar',
        //         length: '255',
        //         isUnique: true,
        //         isNullable: false
        //     },
        //     {
        //         name: 'email',
        //         type: 'varchar',
        //         length: '100',
        //         isUnique: true,
        //         isNullable: false
        //     }
        // ]
        // }),true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user', true)
    }

}
