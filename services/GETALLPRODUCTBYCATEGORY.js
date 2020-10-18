const { query } = require("../database/database")

async function GETALLPRODUCTBYCATEGORY(SLUG){
	const a = await query({
		sql: "SELECT * FROM categories WHERE slug = ?",
		values: [SLUG]
	})
	if(a.length <= 0) return null
	
	const result = await query({
		sql: "SELECT * FROM products WHERE categoryId = ?",
		values: [a[0].id]
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