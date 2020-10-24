const { query } = require("../library/Database")

async function GETALLBRAND(){
	const result = await query({
		sql: "SELECT * FROM brands"
	})

	return result
}

module.exports = GETALLBRAND