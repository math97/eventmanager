import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class updateUserWithNullOption1648226528565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users','phone_number',new TableColumn({name: "phone_number",type: "int",isNullable:true}));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('users','phone_number',new TableColumn({name: "phone_number",type: "int"}));
    }

}
