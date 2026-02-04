import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;

export const connectMDB = async () => {
  try {
    const connection = await mongoose.connect(DB_URI);
    console.log("🔥  connection to MDB success");
  } catch (error) {
    console.log("⛔  filed to connection to MDB");
    process.exit(1);
  }
};

const shutdownMDB = async () => {
  console.log('❎ disconnect from MDB with Ctrl + C');
  await mongoose.connection.close();
  process.exit(0);
}


process.on('SIGINT', shutdownMDB);