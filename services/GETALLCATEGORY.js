const { query } = require("../database/database")

async function GETALLCATEGORY(){
	const result = await query({
		sql: "SELECT * FROM categories"
	})

	return result
}

module.exports = GETALLCATEGORY