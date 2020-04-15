// Local dependencies
const orm = require("../config/orm");

const burger = {
	viewAll(cb) {
		orm.selectAll("burgers", cb);
	},
	create(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, cb);
	},
	update(id, col, val, cb) {
		orm.updateOne("burgers", id, col, val, cb);
	},
};

// Export
module.exports = burger;
