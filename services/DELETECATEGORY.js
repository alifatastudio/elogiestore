const { query } = require("../library/Database")

async function DELETECATEGORY(ID){
	await query({
		sql: 'DELETE FROM categories WHERE id = ?',
		values: ID
	})
}

module.exports = DELETECATEGORY