#!/usr/bin/env node

var
  debug  = require('debug')('passport-mongo'),
  app    = require('./app'),
  logger = require('morgan')

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'))

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
