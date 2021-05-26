import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1622041835360 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({

          name: "users",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()",

            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "lastname",
              type: "varchar"
            },
            {
              name: "nickname",
              type: "varchar",
              isUnique: true,
            },
             {
               name: "email",
               type: "varchar",
               isUnique: true,
             },
             {
               name: "password",
               type: "varchar"
             },
             {
               name: "cpf",
               type: "varchar"
             },
             {
               name: "birth_date",
               type: "varchar"
             },
             {
               name: "phone",
               type: "varchar"
             },
             {
               name: "address",
               type: "varchar"
             },
             {
               name: "bio",
               type: "varchar"
             },
             {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()"
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}
