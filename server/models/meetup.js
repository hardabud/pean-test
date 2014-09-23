var user = 'user';
var password = 'password';
var server = 'localhost';
var dbName = 'postgres';

exports.connectString = 'tcp://' + user + ':' + password + '@' + server + '/' + dbName;
