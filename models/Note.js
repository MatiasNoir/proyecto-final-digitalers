import mongoose from "mongoose";
// const { marked } = require('marked')
/*SLUG = Lo que viene despues de nuestro dominio
ej: https://dominio.com/SLUG/ y se refiere
a una pagina o publicacion especifica. */
// const slugify = require('slugify')
/* dompurify: sanetizar codigo HTML eliminando cargas utiles XSS(cross site scripting)*/
// const createDOMPurify = require('dompurify');
/*nos permite recrear un DOM dentro de un entorno en el que no contamos con un navegador */
// const { JSDOM } = require('jsdom');

// const dompurify = createDOMPurify(new JSDOM().window)

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
        // },
        // sanitizedhtml: {
        //     type: String,
        //     require: true
        // }
    },
    { versionKey: false }
)

//Middleware .pre()

// noteSchema.pre('validate', function (next) {
//     if (this.title) {
//         //strict: elimina los caracteres especiales
//         this.slug = slugify(this.title, { lower: true, strict: true })
//     }
//     if (this.markdown) {
//         //convertimos nuestro doc HTML y luego limpiar ese documento y se deshace de cualquier codigo malisioso
//         this.sanitizedhtml = dompurify.sanitize(marked(this.markdown))
//     }
//     next();
// });

export default mongoose.model("Note", noteSchema);


