const { query } = require("../library/Database")

async function CREATEBRAND(RESOURCE){
	const { name, slug } = RESOURCE

	const result = await query({
		sql: "INSERT INTO brands SET ?",
		values: {name: name, slug: slug}
	})

	return result.insertId
}

module.exports = CREATEBRAND