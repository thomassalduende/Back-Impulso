import { Column, PrimaryGeneratedColumn, Entity, BaseEntity} from 'typeorm'
  
@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  password: String;
}