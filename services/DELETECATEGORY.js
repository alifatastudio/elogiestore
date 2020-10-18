const { query } = require("../database/database")

async function DELETECATEGORY(ID){
	await query({
		sql: 'DELETE FROM categories WHERE id = ?',
		values: ID
	})
}

module.exports = DELETECATEGORY