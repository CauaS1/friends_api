import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1623504195150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'photo',
            type: 'varchar',
            default: undefined,
            isNullable: true
          },
          {
            name: 'about',
            type: 'varchar',
            default: undefined,
            isNullable: true
          },
          {
            name: 'age',
            type: 'integer',
            default: 0
          },
          {
            name: 'longitude',
            type: 'decimal',
            default: 0,
          },
          {
            name: 'latitude',
            type: 'decimal',
            default: 0,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        // foreignKeys: [
        //   {
        //     name: 'providerUser',
        //     referencedTableName: 'message',
        //     referencedColumnNames: ['id'],
        //     columnNames: ['user_message']
        //   }
        // ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }

}

//foreignKeys: [ 
  // { // name: 'providerUser',
   // referencedTableName: 'message',
    // referencedColumnNames: ['id'], 
    // columnNames: ['user_message'], // onDelete: 'CASCADE', // onUpdate: 'CASCADE' // } // ]