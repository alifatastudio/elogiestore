export const rok = [
	{
		"id": "ROE-CARISSA",
		"name": "Carissa Pleated Skirt",
		"slug": "rok-carissa-pleated-skirt-elogiefemale",
		"price": 85000,
		"discount": 0,
		"brand": "",
		"color": "",
		"material": "",
		"category": "Rok",
		"description": "\nPanjang Rok : 90cm\nLingkar Pinggang : 60cm\nLingkar Pinggang Saat Karet Tertarik : 100cm \n\n* Warna : Army, Black, Coco, Dusty Pink, Emerald, Mocca, Navy, Pink\n*Bahan : Amuzen, Halus dan Jatuh ",
		"variants": {
			"name": "Warna",
			"variant": [
				{"id": 0, "name": "All", stock: 20, indexImage: 0},
				{"id": 1, "name": "Dusty Pink", stock: 0, indexImage: 1},
				{"id": 2, "name": "Navy", stock: 5, indexImage: 2},
				{"id": 3, "name": "Black", stock: 5, indexImage: 3},
				{"id": 4, "name": "Coco", stock: 5, indexImage: 4},
				{"id": 5, "name": "Mocca", stock: 5, indexImage: 5},
			],
		},
		"images": [
			{"id": 0, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZpXC.webp"},
			{"id": 1, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZZC0K.webp"},
			{"id": 2,	url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZZC0K.webp"},
			{"id": 3, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZ50u.webp"},
			{"id": 4,	url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZq3XI.webp"},
			{"id": 5, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZpXC.webp"},
			{"id": 6, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/3hwAEKFDN6y95PeYdf3LHQKW.webp"},
			{"id": 7, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZlI0n.webp"},
			{"id": 8, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZgbV.webp"},
			{"id": 9, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZlmfq.webp"},
			{"id": 10, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/LJZg9j1.webp"},
			{"id": 11, url: "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/wnypXPZ95Ob2iNlW7as29u.webp"},
		]
	}
]

export default (req, res) => {
  res.statusCode = 200
  res.json([...rok])
}