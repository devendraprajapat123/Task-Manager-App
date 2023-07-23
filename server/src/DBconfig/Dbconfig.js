import mongoose from "mongoose";
import 'dotenv/config'
export async function DBconfig() {
    try {
        mongoose.connect(process.env.DB_PORT)
        console.log(`Database Conneceted `);
    } catch (error) {
        console.log("Database not conneceted");
    }

}