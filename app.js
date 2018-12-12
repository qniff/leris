const express = require('express')
const app = express()

var ejs = require('ejs')
var bodyParser = require('body-parser')
var path = require('path')
var server = require('http').createServer(app)
var port = process.env.PORT || 3000

app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public/'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require('./content/routes')(app)
require('./content/ee')(app)
require('./content/ru')(app)
require('./content/en')(app)

server.listen(port, () => {
  console.log('Server listening at port %d', port)
})