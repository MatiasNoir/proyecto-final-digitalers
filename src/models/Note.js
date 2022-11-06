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
        // markdown: {
        //     type: String,
        //     required: true,
        // },
        user: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        // slug: {
        //     type: String,
        //     require: true,
        //     //Construye indices unicos
        //     //pero no es una validacion
        //     //Ej: no permite mismo usuario con el mismo nombre
        //     unique: true
        // }
    },
    { versionKey: false }
)

export default mongoose.model("Note", noteSchema);


