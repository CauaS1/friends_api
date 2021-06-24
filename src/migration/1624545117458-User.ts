import { type } from "os";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

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
          },
          {
            name: "postId",
            type: "uuid",
            isUnique: true,
            isNullable: true,
            default: undefined
          }
        ],
      })
    )

    const foreignKey = new TableForeignKey({
      columnNames: ["id"], // and here to postId
      referencedColumnNames: ["id"],
      referencedTableName: "post", //test changing here to: user
      onDelete: "CASCADE"
    });

    await queryRunner.createForeignKey("user", foreignKey); // and here to post
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }

}
