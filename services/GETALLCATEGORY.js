const { query } = require("../library/Database")

async function GETALLCATEGORY(){
	const result = await query({
		sql: "SELECT * FROM categories"
	})

	return result
}

module.exports = GETALLCATEGORY