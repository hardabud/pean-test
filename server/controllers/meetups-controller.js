var pg = require('pg');
var Meetup = require('../models/meetup');
var connectString = Meetup.connectString;

module.exports.create = function (req, res) {
	var body = req.body;
	var name = body.name;	
	var queryInsert = 'INSERT INTO meetups (name) VALUES ($1)';
	
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au serveur', err); }
		client.query(queryInsert, [name], function(err, result) {
		  done();
		  if(err) { return console.error('erreur dans la requête', err); }
			res.send(body);
		});
	});
}

module.exports.list = function (req, res) {
	var queryList = 'SELECT * FROM meetups';
	
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au serveur', err); }
		client.query(queryList, null, function(err, result) {
		  done();
		  if(err) { return console.error('erreur dans la requête', err); }
			var results = JSON.stringify(result.rows);
			res.send(results);
		});
	});
}
