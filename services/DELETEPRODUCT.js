const { query } = require("../library/Database")

async function DELETEPRODUCT(ID){
	await query({
		sql: 'DELETE FROM products WHERE id = ?',
		values: ID
	})
}

module.exports = DELETEPRODUCT