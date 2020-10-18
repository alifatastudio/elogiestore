const { query } = require("../database/database")

async function GETALLPRODUCT(){
	const result = await query({
		sql: "SELECT * FROM products"
	})

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

module.exports = GETALLPRODUCT