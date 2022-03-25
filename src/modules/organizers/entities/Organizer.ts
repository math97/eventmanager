import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import { Event } from "../../events/entities/Event";
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
  phoneNumber?: number;

  @OneToMany(() => Event, (event) => event.organizer)
  events?:Event[]

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Organizer }