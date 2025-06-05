import mongoose from 'mongoose'

async function connectDB(){
    try {
        const connectInstance = mongoose.connect(`${process.env.MONGO_URI}/bytechat`);
        console.log(`MongoDB connected successfully ${connectInstance}`);
    } catch (error) {
        console.error("Mongo connection failed!!", error);
        process.exit(1);
    }
}

export default connectDB;