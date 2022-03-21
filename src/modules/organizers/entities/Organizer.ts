import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
class Organizer {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column("business_type")
  businessType: string;

  @Column()
  cnpj: string;

  @Column("corporate_name")
  corporateName: string;

  @Column("phone_number")
  phoneNumber: Number;

  @CreateDateColumn()
  created_at: Date;
}

export { Organizer }