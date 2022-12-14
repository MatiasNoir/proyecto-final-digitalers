import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//Documentacion bcryptjs: https://www.npmjs.com/package/bcryptjs

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
    },
    { versionKey: false }
);

//methods es de mongoose, me permite crear un metodo para una clase
//hash y salt, son dos formas de agregarle "seguridad" a la contraseña, cifrandola
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
//devuelve un boolean, comparando una contraseña y la contraseña de la db
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
