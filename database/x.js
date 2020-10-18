var { query } = require('./database');
var sepatu01 = require('../resources/PRODUCTS/sepatu01');
var sepatu02 = require('../resources/PRODUCTS/sepatu02');
var sepatu03 = require('../resources/PRODUCTS/sepatu03');
var shortCargoPants = require('../resources/PRODUCTS/shortCargoPants');
var stripTees = require('../resources/PRODUCTS/stripTees');
var tunik = require('../resources/PRODUCTS/tunik');

const x = [
	...sepatu01.products,
	...sepatu02.products,
	...sepatu03.products,
	...shortCargoPants.products,
	...stripTees.products,
	...tunik.products,
]

function CEKDATA(){
		for (var i = 0; i < x.length; i++) {
			console.log({
				code: x[i].id, 
				name: x[i].name, 
				slug: x[i].slug, 
				price: x[i].price, 
				discount: x[i].discount, 
				brandId: 1, 
				categoryId: 1, 
				description: x[i].description, 
				variants: JSON.stringify(x[i].variants), 
				images: JSON.stringify(x[i].images)
			})
		}
}

async function INSERTDATA(){
	try{
		for (var i = 0; i < x.length; i++) {
			const result = await query({
				sql: "INSERT INTO products SET ?",
				values: {
					code: x[i].id, 
					name: x[i].name, 
					slug: x[i].slug, 
					price: x[i].price, 
					discount: x[i].discount, 
					brandId: 1, 
					categoryId: 1, 
					description: x[i].description, 
					variants: JSON.stringify(x[i].variants), 
					images: JSON.stringify(x[i].images)
				}
			})
			console.log(result.insertId)
		}
	}
	catch(Exception){
		console.log(Exception)
	}
}

INSERTDATA()