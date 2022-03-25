import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class updateOrganizerWithNullOption1648229264708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('organizers','phone_number',new TableColumn({name: "phone_number",type: "int",isNullable:true}));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('organizers','phone_number',new TableColumn({name: "phone_number",type: "int"}));
    }

}
