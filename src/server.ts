import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

let server: Server;

const PORT = process.env.PORT || 5000;
const DB_USER = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.6dgrwby.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

async function main() {
  try {
    await mongoose.connect(uri);
    server = app.listen(PORT, () => {
      console.log(`server is listen to port ${PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}

main();
