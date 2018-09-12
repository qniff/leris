const express = require('express')
const app = express()
var ejs = require('ejs')
var bodyParser = require('body-parser')
var path = require('path')

app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require('./routes')(app)

app.listen(8000, () => console.log('Father app is listening on port 8000!'))