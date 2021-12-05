const express = require("express");
const cors = require("cors");
const dbConnection = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Conectar a base de datos
    this.conectDb();

    // Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();
  }

  async conectDb() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    //Lectura y parseo
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/userRoutes"));
  }
  start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}
module.exports = Server;
