const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); //permite levantar un servidor

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //middleware que hace publica la carpeta

//IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket.js')

//para saber cuando un usuario se conecta al createServer


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
