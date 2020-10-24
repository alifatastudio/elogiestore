const { query } = require("../library/Database")

async function DELETEBRAND(ID){
	await query({
		sql: 'DELETE FROM brands WHERE id = ?',
		values: ID
	})
}

module.exports = DELETEBRAND