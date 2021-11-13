import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreatePosts1636760581755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'post',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'userId',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'postNumber',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'body',
                        type: 'varchar',
                        isNullable: false,
                    }

                ]
            })
        );

        await queryRunner.createForeignKey('post', new TableForeignKey({
            name: 'UserPost',
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('post', 'UserPost');

        await queryRunner.dropTable('post');
    }

}
