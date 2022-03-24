import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";
import { Organizer } from "../../organizers/entities/Organizer";

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
  value: Number;

  @Column({name:"tickets_limit"})
  ticketsLimit: Number;

  @Column({name:"tickets_sold"})
  ticketsSold: Number;

  @ManyToOne(() => Organizer, (organizer) => organizer.events)
  organizer: Organizer

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Event }