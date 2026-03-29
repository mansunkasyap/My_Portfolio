import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const message = await Contact.create(body);

  return Response.json(message);
}