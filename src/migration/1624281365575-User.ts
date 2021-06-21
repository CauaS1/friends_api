import {MigrationInterface, QueryRunner} from "typeorm";

export class User1624281365575 implements MigrationInterface {
    name = 'User1624281365575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "photo" character varying, "about" character varying, "age" integer DEFAULT '0', "longitude" integer DEFAULT '0', "latitude" integer DEFAULT '0', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_messages_message" ("userId" uuid NOT NULL, "messageId" uuid NOT NULL, CONSTRAINT "PK_c14700e4392efbe58df75a02fd8" PRIMARY KEY ("userId", "messageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_893acd5dc133cbf109d64cce72" ON "user_messages_message" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_791985ca59b07737dcff0db5d5" ON "user_messages_message" ("messageId") `);
        await queryRunner.query(`ALTER TABLE "user_messages_message" ADD CONSTRAINT "FK_893acd5dc133cbf109d64cce72e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_messages_message" ADD CONSTRAINT "FK_791985ca59b07737dcff0db5d51" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_messages_message" DROP CONSTRAINT "FK_791985ca59b07737dcff0db5d51"`);
        await queryRunner.query(`ALTER TABLE "user_messages_message" DROP CONSTRAINT "FK_893acd5dc133cbf109d64cce72e"`);
        await queryRunner.query(`DROP INDEX "IDX_791985ca59b07737dcff0db5d5"`);
        await queryRunner.query(`DROP INDEX "IDX_893acd5dc133cbf109d64cce72"`);
        await queryRunner.query(`DROP TABLE "user_messages_message"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
