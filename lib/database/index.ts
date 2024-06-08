import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn: null, Promise:null};

export const connecToDatabase = async () =>{
    if(cached.conn) return cached.connect;

    if(!MONGODB_URI) throw new Error("MONGO URI Is Missing");
    cached.Promise = cached.Promise || mongoose.connect(MONGODB_URI,{
        dbName:'pixaai',
        bufferCommands:false,
    })
    cached.conn = await cached.Promise;

    return cached.conn;
}