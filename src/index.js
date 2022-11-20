import app from "./app.js";
import "./db.js";

async function main() {
  app.listen(app.get("port"));
  console.log("Server corriendo en el puerto: ", app.get("port"));
}

main();