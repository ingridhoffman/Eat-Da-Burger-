// Local dependencies
const orm = require("../config/orm");

const burger = {
	viewAll(cb) {
		orm.selectAll("burgers", cb);
	},
	create(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, cb);
	},
};

// Export
module.exports = burger;
