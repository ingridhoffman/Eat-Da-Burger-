// Node dependencies
const mysql = require("mysql");

let connection;
// Connection parameters
// Use JawsDB for Heroku deployment
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	const connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "UofOBootcamp",
		database: "burgers_db",
	});
}
// Create connection
connection.connect((err) => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export
module.exports = connection;
