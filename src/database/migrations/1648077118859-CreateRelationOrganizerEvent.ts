import {Column, MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateRelationOrganizerEvent1648077118859 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('events',
        new TableColumn({name:"organizerId",type:"uuid"})
        );
        await queryRunner.addColumn('organizers',
        new TableColumn({name:"eventsId",type:"uuid",isNullable:true,isArray:true})
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('events',"organizerId");
        await queryRunner.dropColumn('organizers',"eventsId");
    }

}
