import app from "./app.js";
import { createTestUser } from "../libs/testUser.js";
//Usuario de prueba, para testear el funcionamiento de la app
// email: test@localhost contraseña: testeando123
import "./db.js";

async function main() {
  await createTestUser();
  app.listen(app.get("port"));

  console.log("Server corriendo en el puerto: ", app.get("port"));
}

main();