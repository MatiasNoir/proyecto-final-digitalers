import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    },
    { versionKey: false }
)

export default mongoose.model("Note", noteSchema);


