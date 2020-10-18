var { query } = require('./database');

async function INSERTSOMETHING(){
		const data = {
			kode: "BATP-BLACK",
			name: "Hitam",
			slug: "basic-tees-black-elogimale-elogie",
			price: 69000,
			discount: 0,
			brand: "",
			color: "hitam",
			material: "Katun",
			category: "Basic Tees",
			description: "",
			variants: {
				name: "Ukuran",
				variant: [
					{id: 0, name: "All", stock: 19, production: 100, imageId: 0},
					{id: 1, name: "S", stock: 5, production: 100, imageId: 0},
					{id: 2, name: "M", stock: 5, production: 100, imageId: 0}
				]
			},
			images: [
				{
					id: 0, 
					url: "https://scontent-cgk1-1.xx.fbcdn.net/v/t1.0-9/120648841_153486836425878_1413917391484265191_o.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=QSQ0kSfmhLoAX-fghS5&_nc_ht=scontent-cgk1-1.xx&oh=e4c555155e2ee054afdfcdb78f533fae&oe=5F9EFEF7"
				},
				{
					id: 1, 
					url: "https://scontent-cgk1-1.xx.fbcdn.net/v/t1.0-9/120595394_153486976425864_4123115438072100876_o.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=I3HpErOyjAQAX9G8SHS&_nc_ht=scontent-cgk1-1.xx&oh=d5f7ad845561adf5427beb54afd8b548&oe=5F9F511E"
				}
			]
		};

		const data02 = {
			...data, 
			variants: JSON.stringify(data.variants), 
			images: JSON.stringify(data.images)
		};

		await query({
			sql: "INSERT INTO products SET ?",
			values: {...data02}
		});

}

async function SELECTSOMETHING(){
	const results = await query({
		sql: "SELECT * FROM products",
	})

	if(results.length > 0){
		const parseData = {
			...results[0],
			variants: JSON.parse(results[0].variants),
			images: JSON.parse(results[0].images),
		}
	}

	console.log(results)
}

SELECTSOMETHING()