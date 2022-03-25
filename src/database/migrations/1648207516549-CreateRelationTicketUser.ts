import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateRelationTicketUser1648207516549 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tickets',new TableColumn({name:"userId",type:"uuid"}));
        await queryRunner.createForeignKey(
            'tickets',
            new TableForeignKey({
                name: "usersForeignKeyOnTickets",
                columnNames:["userId"],
                referencedTableName:"users",
                referencedColumnNames:["id"],
             }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tickets','usersForeignKeyOnTickets');
        await queryRunner.dropColumn('tickets','userId');
    }

}
