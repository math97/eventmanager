import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateRelationEventTicket1648154078673 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'tickets',
            new TableForeignKey({
                name: "eventsForeignKeyOnTickets",
                columnNames:["eventId"],
                referencedTableName:"events",
                referencedColumnNames:["id"],
             }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("events","organizerForeignKeyOnEvents");
    }

}
