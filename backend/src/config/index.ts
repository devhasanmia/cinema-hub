import dotenv from "dotenv";
dotenv.config();

export const config = {
    port: process.env.PORT || 4000,
    db_Url: process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/local-chenema-hub"
};