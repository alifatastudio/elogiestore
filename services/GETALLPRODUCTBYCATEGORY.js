const { query } = require("../library/Database")

async function GETALLPRODUCTBYCATEGORY(SLUG){
	const result = await query({
		sql: "SELECT * FROM products_view WHERE categorySlug = ?",
		values: [SLUG]
	})
	if(result.length <= 0) return null

	let x = []
	for (var i = 0; i < result.length; i++) {
		x[i] = {
			...result[i],
			variants: JSON.parse(result[i].variants), 
			images: JSON.parse(result[i].images)
		}
	}

	return x
}

module.exports = GETALLPRODUCTBYCATEGORY