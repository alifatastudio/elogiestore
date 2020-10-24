const { query } = require("../library/Database")

async function UPDATECATEGORY(ID, RESOURCE){
	const {name, slug } = RESOURCE

	await query({
		sql: "UPDATE categories SET name = ?, slug = ? WHERE id = ?",
		values: [name, slug, ID]
	})
}

module.exports = UPDATECATEGORY