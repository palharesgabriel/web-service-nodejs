var express = require('express');
var app = express();
 
// Definir a route principal
app.get('/', function(req, res) {
  res.send('RESTful API by Palhares');
});
 
// Lista de Utilizadores
var users = [
  { id: 1, username: 'Gabriel'  , email: 'gabriel@god.com' },
  { id: 2, username: 'Mário'    , email: 'mario@viadu.com' }, 
  { id: 3, username: 'Papacu'   , email: 'ei@seubundamole.coom' }
];
// Definir um endpoint da API
app.get('/api/listaUsers', function(req, res, next) {
  res.send(users);
})
 
// Aplicação disponível em http://127.0.0.1:8888/
app.listen(8888);

