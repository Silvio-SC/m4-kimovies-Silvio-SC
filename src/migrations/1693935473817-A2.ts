import { MigrationInterface, QueryRunner } from "typeorm";

export class A21693935473817 implements MigrationInterface {
    name = 'A21693935473817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "scheduleId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_366a71380959fb989c365dbcac2" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_366a71380959fb989c365dbcac2"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "scheduleId"`);
    }

}
