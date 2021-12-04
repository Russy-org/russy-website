var express = require('express')
var app = express();
const client = require("./index");

console.log(`Hello from Node.js ${process.version}!`);

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res) {
  res.render("../views/home", {client})
})
app.get('*', function(req, res) {
  res.render("../views/404")
})

app.listen(3000, function () {
  console.log('conectado na porta 3000')
})