var
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	apiRoutes = require('./routes/api.js'),
	dotenv = require('dotenv').load({silent: true}),
	jwt = require('jsonwebtoken'),
	User = require('./models/User'),
	port = process.env.PORT || 3000

// environment port
var DB_URL = process.env.MLAB_LINK || 'mongodb://localhost/mean-treasure'

// console.log(process.env.secret)
mongoose.connect(DB_URL, function(err){
	if(err) return console.log('Error connecting')
	console.log('Connected to ' + DB_URL)
})

app.set('superSecret', process.env.secret)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'))

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

// apply routes to application with the prefix /api
app.use('/api', apiRoutes)

app.listen(port, function(){
	console.log('Server running on ' + port)
})
