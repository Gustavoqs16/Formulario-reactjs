const express = require('express');
const routes = require('../routes');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(routes);
app.use(express.json({limit: '50mb'}));
const server = http.createServer(app);

/*tudo que não é público senão estiver autenticado volta para home*/
global.authenticationMiddleware = () => {  
    return function (request, response, next) {
      
      if (request.isAuthenticated()) {
        return next()
      }else{
        return response.redirect("/");
      }
    }
};

app.use(cors({
    'exposedHeaders': ['X-Total-Count'],
    'credentials': true,
    'origin': true,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    "preflightContinue": true,
    "optionsSuccessStatus": 200
  }));
  app.options('*', cors({
    'credentials': true,
    'origin': true,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    "preflightContinue": true,
    "optionsSuccessStatus": 200
  }));

  
server.listen(process.env.PORT || 3333, () => {console.log("Servidor iniciado na porta 3333")});