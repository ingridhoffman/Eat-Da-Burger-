// Local dependencies
const connection = require("../config/connection.js");

// SQL statement functions
const orm = {
	selectAll(table, cb) {
		const query = "SELECT * FROM ??;";
		connection.query(query, [table], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne(table, cols, vals, cb) {
		const query = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(query, [table, cols, vals], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
};

// Export
module.exports = orm;
