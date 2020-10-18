const { query } = require("../database/database")

async function UPDATEPRODUCT(ID, RESOURCE){
	const { 
		code, name, slug, price, discount, status,
		brandId, categoryId, description, 
		variants, images
	} = RESOURCE

	const update_data = {
		code, name, slug, price, discount, status,
		brandId, categoryId, description, 
		variants: JSON.stringify(variants), 
		images: JSON.stringify(images),
	}

	await query({
		sql: "UPDATE products SET code = ?, name = ?, slug = ?, price = ?, discount = ?, status = ?, brandId = ?, categoryId = ?, description = ?, variants = ?, images = ? WHERE id = ?",
		values: [
			update_data.code,
			update_data.name,
			update_data.slug,
			update_data.price,
			update_data.discount,
			update_data.status,
			update_data.brandId,
			update_data.categoryId,
			update_data.description,
			update_data.variants,
			update_data.images,
			ID
		]
	})
}

module.exports = UPDATEPRODUCT