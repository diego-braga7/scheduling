import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddCollumTableUser1696787324452 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.addColumn('user', new TableColumn({
        //     name: 'password',
        //     type: 'varchar',
        //     length: '255'

        // }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('user', 'password');
    }

}
