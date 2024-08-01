import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ default: true })
  public: boolean

  constructor(partial: Partial<Store>) {
    Object.assign(this, partial)
  }
}
