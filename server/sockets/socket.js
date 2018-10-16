const {io} = require('../server');


io.on('connection', (client)=>{
  console.log('Usuario Conectado');


  client.on('disconnect', ()=>{
    console.log('Usuario desconectado');
  });

  //Para escuchar el cliente (por el emit)
  client.on('enviarMensaje', (data/*,callback*/)=>{
    console.log(data);
    client.broadcast.emit('enviarMensaje', data);







    // if (mensaje.usuario) {
    //   callback({
    //     resp: 'TODO SALIO BIEN'
    //   });
    // }else {
    //   callback({
    //     resp: 'TODO SALIO MAAAAAL'
    //   });
    // }



  });

  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta aplicacion'
  });
});
