// Local dependencies
const connection = require("../config/connection.js");

// SQL statement functions
const orm = {
	selectAll(table, cb) {
		const query = "SELECT * FROM " + table + ";";
		connection.query(query, (err, res) => {
			if (err) throw err;
			cb(res);
		});
	},
};

// Export
module.exports = orm;
