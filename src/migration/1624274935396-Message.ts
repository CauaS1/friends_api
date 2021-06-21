import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Message1624274935396 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'message',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'userId',
            type: 'uuid',
            generationStrategy: 'uuid',
          },
          {
            name: 'sendTo',
            type: 'uuid',
            generationStrategy: 'uuid',
          },
          {
            name: 'text',
            type: 'varchar'
          },
          {
            name: 'sent_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('message')
  }

}
