import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import { Organizer } from "../../organizers/entities/Organizer";
import { Ticket } from "../../tickets/entities/Ticket";

@Entity("events")
class Event {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column({name:"tickets_limit"})
  ticketsLimit: number;

  @Column({name:"tickets_sold"})
  ticketsSold: number;

  @ManyToOne(() => Organizer, (organizer) => organizer.events)
  organizer: Organizer

  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets:Ticket[]

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Event }