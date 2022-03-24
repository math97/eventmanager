import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateEvents1648151138814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('events',new TableColumn({name:"tickets_sold",type:"Int",default:0}));
        await queryRunner.changeColumn('events','total_tickets',new TableColumn({name: "tickets_limit",type: "int",}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
