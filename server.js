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
	port = process.env.PORT || 3000

	// console.log(process.env.secret)

mongoose.connect('mongodb://localhost/mean-treasure', function(err){
	if(err) return console.log('Error connecting')
	console.log('Connected to MongoDB (mean-treasure)!')
})

app.set('superSecret', process.env.secret)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use('/api', apiRoutes)

app.listen(port, function(){
	console.log('Server running on ' + port)
})
