import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateOrganizers1647830279154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "organizers",
              columns: [
                {
                  name: "id",
                  type: "uuid",
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
                  name: "business_type",
                  type: "varchar",
                },
                {
                  name: "cnpj",
                  type: "varchar",
                },
                {
                    name: "corporate_name",
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
      await queryRunner.dropTable("organizers");
    }

}
