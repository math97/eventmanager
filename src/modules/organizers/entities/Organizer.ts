import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
@Entity("organizers")
class Organizer {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({name:"business_type"})
  businessType: string;

  @Column()
  cnpj: string;

  @Column({name:"corporate_name"})
  corporateName: string;

  @Column({name:"phone_number"})
  phoneNumber: Number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Organizer }