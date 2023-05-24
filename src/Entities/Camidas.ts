import { Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Comidas extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    descripcion!: string;

    @Column()
    images: string;
}