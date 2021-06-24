import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Post1624544895117 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'post',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'photo',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('post')
  }

}
