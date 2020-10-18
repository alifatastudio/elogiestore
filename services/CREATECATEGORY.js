const { query } = require("../database/database")

async function CREATECATEGORY(RESOURCE){
	const { name, slug } = RESOURCE

	const result = await query({
		sql: "INSERT INTO categories SET ?",
		values: {name: name, slug: slug}
	})

	return result.insertId
}

module.exports = CREATECATEGORY