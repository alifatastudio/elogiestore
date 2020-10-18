const { query } = require("../database/database")

async function DELETEBRAND(ID){
	await query({
		sql: 'DELETE FROM brands WHERE id = ?',
		values: ID
	})
}

module.exports = DELETEBRAND