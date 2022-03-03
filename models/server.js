const express = require('express')
const cors = require('cors')
class Server {


    constructor (){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // middlewares
        this.middlewares();

        // rutas de aplicacion


        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        // parceso y lectura del body
        this.app.use( express.json() );
        // Directorio publico
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {        
        this.app.listen( process.env.PORT, () => {

            console.log('Servidor corriendo en puerto', this.port);

        } );
    }
}

module.exports = Server;