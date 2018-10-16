var socket = io();
//los ON son para escuchar
socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Perdimos conexion con el server');
});
//son para enviar informacion
socket.emit('enviarMensaje', {
  usuario: 'Fernando',
  mensaje: 'Hola Mundo'
}, function(resp) {
  console.log('Respuesta SERVER: ', resp);
});

socket.on('enviarMensaje', function (mensaje) {
  console.log('Servidor:', mensaje);
});
