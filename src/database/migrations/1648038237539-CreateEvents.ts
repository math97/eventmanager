import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1648038237539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"events",
            columns:[
                {
                    name: "id",
                    type: "uuid",
                  },
                  {
                    name: "name",
                    type: "varchar",
                  },
                  {
                    name: "description",
                    type: "varchar",
                  },
                  {
                    name: "address",
                    type: "varchar",
                  },
                  {
                    name: "total_tickets",
                    type: "int",
                  },
                  {
                    name: "value",
                    type: "money",
                  },
                  {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                  },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
    }

}
