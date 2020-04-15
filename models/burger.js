// Local dependencies
const orm = require("../config/orm");

const burger = {
	viewAll(cb) {
		orm.selectAll("burgers", cb);
	},
};

// Export
module.exports = burger;
