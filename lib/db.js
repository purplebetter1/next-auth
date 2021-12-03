import { MongoClient } from 'mongodb'

export async function connectToDatabase(){
    const connectionString = 'mongodb+srv://andrew123:andrew123@cluster0.lzocf.mongodb.net/AuthDemo?retryWrites=true&w=majority'
    const client = await MongoClient.connect(connectionString)

    return client
}