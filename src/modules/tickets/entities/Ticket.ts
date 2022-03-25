import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import { Event } from "../../events/entities/Event";
import { User } from "../../users/entities/User";

@Entity("tickets")
class Ticket {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Event, (event) => event.tickets)
  event: Event

  @ManyToOne(() => User, (user) => user.tickets)
  user: User

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Ticket }