import { DataSource } from 'typeorm'
import { Comidas } from '../Entities/Camidas'
import { DB } from '../config'

export const Connection = new DataSource({
    type: 'postgres',
    username: DB.username,
    password: DB.password,
    host: DB.host,
    port: Number(DB.port),
    database: DB.database,
    entities: [Comidas],
    synchronize: true,
    logging: true
})
