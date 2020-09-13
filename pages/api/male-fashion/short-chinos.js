export const shortChinos = [
	{
		id: "SCBS01B",
		name: "Short Chinos Mocca",
		slug: "short-chinos-mocca-elogiemale",
		price: (119000/2)+119000,
		discount: 0,
		brand: "",
		material: "Katun",
		size : [
			{id: 0, name: "All", stock: 17, production: "100"},	
			{id: 1, name: "28", stock: 4, production: "25"},	
			{id: 2, name: "30", stock: 5, production: "25"},
			{id: 3, name: "32", stock: 5, production: "25"}	,
			{id: 4, name: "34", stock: 3, production: "25"}
		],
		images: [
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvNmZjNmVjNGI2Nzg5ODNiOTI0YTViZGMwZmQ4YTFlMzE=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvN2NjMmZmMmVlZDQ1M2ViYTQxN2NhYWYwMTM5M2E1NDM=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvMWNlNTEyOWNlMWJlM2UzZTQ1Njk0ZTJkYjhmNTZjNmI=.jpg`
		],
		description: ""
	},
	{
		id: "SCBS02B",
		name: "Short Chinos Cream",
		slug: "short-chinos-cream-elogiemale",
		price: (119000/2)+119000,
		discount: 0,
		brand: "",
		material: "Katun",
		size : [
			{id: 0, name: "All", stock: 17, production: "100"},	
			{id: 1, name: "28", stock: 4, production: "25"},	
			{id: 2, name: "30", stock: 5, production: "25"},
			{id: 3, name: "32", stock: 5, production: "25"}	,
			{id: 4, name: "34", stock: 3, production: "25"}
		],
		images: [
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvOTZkM2U1YjM2ZTU3ZThhNzgyMmE3MmEwOWZkYjJjMzI=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvMjNkNjM3ZGE1MzBjZTMzZjc1OTQ2ZjVmMmRkNzY2MmY=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvMWNlNTEyOWNlMWJlM2UzZTQ1Njk0ZTJkYjhmNTZjNmI=.jpg`
		],
		description: ""
	},
	{
		id: "SCBS03B",
		name: "Short Chinos Dark Grey",
		slug: "short-chinos-dark-grey-elogiemale",
		price: (119000/2)+119000,
		discount: 0,
		brand: "",
		material: "Katun",
		size : [
			{id: 0, name: "All", stock: 17, production: "100"},	
			{id: 1, name: "28", stock: 4, production: "25"},	
			{id: 2, name: "30", stock: 5, production: "25"},
			{id: 3, name: "32", stock: 5, production: "25"}	,
			{id: 4, name: "34", stock: 3, production: "25"}
		],
		images: [
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvMDU2YmNlNmJlYjYwYmI1ODAyNmFhNDAyOTQwOTc0Y2I=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvNmMxZWUxOGM1OWVmYTczNzM3ZDg2NmY5MTI0ODc2MjI=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvMWNlNTEyOWNlMWJlM2UzZTQ1Njk0ZTJkYjhmNTZjNmI=.jpg`
		],
		description: ""
	},
	{
		id: "SCBS04B",
		name: "Short Chinos Light Grey",
		slug: "short-chinos-light-grey-elogiemale",
		price: (119000/2)+119000,
		discount: 0,
		brand: "",
		material: "Katun",
		size : [
			{id: 0, name: "All", stock: 17, production: "100"},	
			{id: 1, name: "28", stock: 4, production: "25"},	
			{id: 2, name: "30", stock: 5, production: "25"},
			{id: 3, name: "32", stock: 5, production: "25"}	,
			{id: 4, name: "34", stock: 3, production: "25"}
		],
		images: [
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvYTg1OWRlZDMxNzZjMzIyZGExMWUyYzQyZjJhNDM1YmI=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvYmI3ZDVkZjQwNjhlNDMwOTQzMjgwZGY5ZjFjZGE5M2I=.jpg`,
		`https://imgx.brdcdn.com/imgx/1200/Y2Yuc2hvcGVlLmNvLmlkL2ZpbGUvMWNlNTEyOWNlMWJlM2UzZTQ1Njk0ZTJkYjhmNTZjNmI=.jpg`
		],
		description: ""
	},
]

export default (req, res) => {
  res.statusCode = 200
  res.json([...shortChinos])
}