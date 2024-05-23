import mongoose from "mongoose";
import { config } from "./index";

const databaseConfig = async () => {
    try {
        await mongoose.connect(config.db_Url as string);
        console.log("Successfully connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
};

// 
export default databaseConfig;