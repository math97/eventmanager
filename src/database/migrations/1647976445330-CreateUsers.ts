import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1647976445330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary:true
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "email",
                  type: "varchar",
                  isUnique: true,
                },
                {
                  name: "password",
                  type: "varchar",
                },
                {
                  name: "phone_number",
                  type: "int",
                },
                {
                  name: "cpf",
                  type: "varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}
