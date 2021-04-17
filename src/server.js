const express = require('express');
const server = express();
const routes = require('./routes')

server.set('view engine', 'ejs');

// Habilita arquivos statics
server.use(express.static ("public"))

// routes
server.use(routes)

// Abre a porta 3000
server.listen(3000, () => console.log('rodando'));