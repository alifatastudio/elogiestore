const { query } = require("../library/Database")

async function GETPRODUCTBYCODE(CODE){
	const result = await query({
		sql: 'SELECT * FROM products_view WHERE code = ?',
		values: [CODE]
	})

	if(result.length <= 0) return null
		
	const product = {
		...result[0],
		variants: JSON.parse(result[0].variants), 
		images: JSON.parse(result[0].images)
	}

	return product
}

module.exports = GETPRODUCTBYCODE