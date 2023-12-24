//connection to db
import mongoose from "mongoose";

const mongoCon = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB is connected:${conn.connection.host}`);
    }catch(e){
        console.log(`mongo connection is failed! Error:${e.message}`);
    }
}

export default mongoCon;