import { type } from "os";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1624545117458 implements MigrationInterface {
  name = 'User1624545117458'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()"
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
            isNullable: true,
          },
          {
            name: 'about',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'age',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'longitude',
            type: 'varchar',
            isNullable: true,
            default: undefined
          },
          {
            name: 'latitude',
            type: 'varchar',
            isNullable: true,
            default: undefined
          },
          {
            name: 'instagram',
            type: 'varchar',
            isNullable: true,
            default: undefined
          },
          {
            name: 'whatsapp',
            type: 'varchar',
            isNullable: true,
            default: undefined
          },
          {
            name: 'created_at',
            type: 'date',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'date',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: "userPosts",
            referencedTableName: "post",
            referencedColumnNames: ["id"],
            columnNames: ["postId"],
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }

}
