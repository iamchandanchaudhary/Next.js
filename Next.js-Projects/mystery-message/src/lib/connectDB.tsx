import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {}

const connectDb = async(): Promise<void> => {
    if(connection.isConnected) {
        console.log("Database is Already Successfully Connected.");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
        connection.isConnected = db.connections[0].readyState;

        console.log("Database is Successfully Connected.");

    } catch (error) {
        console.log("Database Connection Failed:", error);
        process.exit(1);
    }
}

export default connectDb;