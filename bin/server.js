const http = require('http');
const totalvoice = require('totalvoice-node');
const client = new totalvoice("");

const hostname = '127.0.0.1';
const port = 3000;

gemidao = (to) => {
  client.audio.enviar(to, "https://github.com/haskellcamargo/gemidao-do-zap/raw/master/resources/gemidao.mp3", false, "11995781688", false)
    .then(function (data) {
      console.log(data)
    })
    .catch(function (error) {
      console.error('Erro: ', error)
    });
}

const server = http.createServer((req, res) => {
  gemidao(req.url);
  res.statusCode = 200;
});

server.listen(port, () => {
  console.log(`Server running at PORT 3000`);
});