import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTickets1648153257924 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({name:"tickets",columns:[
            {
                name:"id",
                type:"uuid",
                isPrimary:true,
            },
            {
                name:"eventId",
                type:"uuid"
            },
            {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
        ]}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets");
    }

}
