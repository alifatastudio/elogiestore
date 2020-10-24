const { query } = require("../library/Database")

async function GETPRODUCTBYSLUG(SLUG){
	const result = await query({
		sql: 'SELECT * FROM products_view WHERE slug = ?',
		values: [SLUG]
	})

	if(result.length <= 0) return null
		
	const product = {
		...result[0],
		variants: JSON.parse(result[0].variants), 
		images: JSON.parse(result[0].images)
	}

	return product
}

module.exports = GETPRODUCTBYSLUG