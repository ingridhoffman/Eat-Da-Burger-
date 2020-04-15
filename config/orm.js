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
	updateOne(table, id, col, val, cb) {
		const query = "UPDATE ?? SET ??=? WHERE id=?";
		connection.query(query, [table, col, val, id], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
};

// Export
module.exports = orm;
