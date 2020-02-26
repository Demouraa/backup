const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;


// Configurando boryparser para trafego de dados simples em JSON
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// Configuração do cors de acesso ao backend
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
      res.status(200).send({})
  }
  next();
});

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'testing express and nodemon, GOOD' });
});


//Tratando erro nas rotas, casso rota incalida e retornado a mensagem de Rota não encontrada
app.use((req,res,next)=>{
  const erro = new Error('Rota Não encontrada');
  erro.status = 404
  next(erro)
})
app.use((error, req,res,next)=>{
  res.status(error.status || 500);
  return res.send({
      erro:{
          mensagem: error.message
      }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));