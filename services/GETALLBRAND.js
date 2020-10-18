const { query } = require("../database/database")

async function GETALLBRAND(){
	const result = await query({
		sql: "SELECT * FROM brands"
	})

	return result
}

module.exports = GETALLBRAND