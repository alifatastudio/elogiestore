var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'elogie'
});
 
function testConnection(){
	connection.connect(function(err) {
	 if (err) {
	  console.error('error connecting: ' + err.stack);
	  return;
	 }
	 
	 console.log('connected as id ' + connection.threadId);
	});
}

function query(RESOURCES){
	// RESOURCES terdapat sql, timeout, values
	return new Promise((resolve, reject) => {
		connection.query({
			...RESOURCES
		},function (error, results, fields) {
			if(error) return reject(error)
			return resolve(results)
		 
		 // error will be an Error if one occurred during the query
		 // results will contain the results of the query
		 // fields will contain information about the returned results fields (if any)
		})
	})
}

exports.testConnection = testConnection
exports.query = query