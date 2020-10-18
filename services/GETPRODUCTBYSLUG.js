const { query } = require("../database/database")

async function GETPRODUCTBYSLUG(SLUG){
	const result = await query({
		sql: 'SELECT * FROM products WHERE slug = ?',
		values: [SLUG]
	})

	if(result.length <= 0) return null
		
	const product = {
		id: result[0].id, 
		code: result[0].code, 
		name: result[0].name, 
		slug: result[0].slug, 
		price: result[0].price, 
		discount: result[0].discount,
		brandId: result[0].brandId, 
		categoryId: result[0].categoryId,
		description: result[0].description, 
		variants: JSON.parse(result[0].variants), 
		images: JSON.parse(result[0].images)
	}

	return product
}

module.exports = GETPRODUCTBYSLUG