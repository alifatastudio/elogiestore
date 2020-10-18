const { query } = require("../database/database")

async function CREATEPRODUCT(RESOURCE){
	const { 
		code, name, slug, price, discount, status,
		brandId, categoryId, description, 
		variants, images
	} = RESOURCE

	const result = await query({
		sql: "INSERT INTO products SET ?",
		values: {
			code, name, slug, price, discount, status,
			brandId, categoryId, description, 
			variants: JSON.stringify(variants), 
			images: JSON.stringify(images)
		}
	})

	return result.insertId
}

module.exports = CREATEPRODUCT