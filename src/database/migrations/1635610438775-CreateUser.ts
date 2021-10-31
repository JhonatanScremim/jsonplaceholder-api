import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateUser1635610438775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'geo',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'lat',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'lng',
                        type: 'varchar',
                        isNullable: false,
                    }
                ]

            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'address',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'suite',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'zipcode',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'geoId',
                        type: 'uuid',
                        isNullable: false,
                    }
                ]
            })
        );

        await queryRunner.createForeignKey('address', new TableForeignKey({
            name: 'GeoAddress',
            columnNames: ['geoId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'geo',
            onDelete: 'SET NULL',
        }));

        await queryRunner.createTable(
            new Table({
                name: 'company',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'catchPhrase',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'bs',
                        type: 'varchar',
                        isNullable: false,
                    }
                ]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'userNumber',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'addressId',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'website',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'companyId',
                        type: 'uuid',
                        isNullable: false,
                    }
                ]
            })
        );

        await queryRunner.createForeignKey('users', new TableForeignKey({
            name: 'AddressUser',
            columnNames: ['addressId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'address',
            onDelete: 'SET NULL',
        }));

        await queryRunner.createForeignKey('users', new TableForeignKey({
            name: 'CompanyUser',
            columnNames: ['companyId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'company',
            onDelete: 'SET NULL',
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('address', 'GeoAddress');
        await queryRunner.dropForeignKey('users', 'AddressUser');
        await queryRunner.dropForeignKey('users', 'CompanyUser');

        await queryRunner.dropTable('geo');
        await queryRunner.dropTable('address');
        await queryRunner.dropTable('company');
        await queryRunner.dropTable('users');
    }

}
