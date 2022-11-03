import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:admin123@cluster0.qoclzqk.mongodb.net/notesapp?retryWrites=true&w=majority";
