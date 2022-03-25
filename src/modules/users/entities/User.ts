import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import { Ticket } from "../../tickets/entities/Ticket";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column({name:"phone_number"})
  phoneNumber?: number;

  @OneToMany(() => Ticket, (ticket) => ticket.user)
  tickets?:Ticket[]

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User }