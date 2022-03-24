import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeingKey1648126580267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'events',
            new TableForeignKey({
                name: "organizerForeignKeyOnEvents",
                columnNames:["organizerId"],
                referencedTableName:"organizers",
                referencedColumnNames:["id"],
             }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("events","organizerForeignKeyOnEvents");
    }

}
