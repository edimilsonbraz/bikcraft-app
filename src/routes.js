const express = require('express');
const routes = express.Router();

const views = __dirname + '/views/'

routes.get('/', (req, res) => res.render(views + "pages/index"))
routes.get('/sobre', (req, res) => res.render(views + "pages/sobre"))
routes.get('/portfolio', (req, res) => res.render(views + "pages/portfolio"))
routes.get('/produtos', (req, res) => res.render(views + "pages/produtos"))
routes.get('/contato', (req, res) => res.render(views + "pages/contato"))



module.exports = routes;