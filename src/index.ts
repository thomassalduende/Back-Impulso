import 'reflect-metadata'
import { Connection } from './Connection/app'
import app from './Connection/server'


async function main() {
    try {
        await Connection.initialize()
        app.listen(3000)
        console.log(`Server initialize on http://localhost:${3000}`)
    }
    catch(err: any) {
        console.log(err)
    }
}

main()