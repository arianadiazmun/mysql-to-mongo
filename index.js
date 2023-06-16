import { MongoClient} from "mongodb" ;
import mysql from 'mysql2/promise'
import { mongoURI, mySQLConnect} from "./secrets.js" ;
 
const db1= await mysql.createConnection(mySQLConnect)

const [addressList] = await db1.execute("Select * from address")

db1.end()

const connection = new MongoClient(mongoURI)

await connection.connect()

const db2 = connection.db('Cluster0')

    await db2.collection('address')
    .insertMany(addressList)

connection.close();