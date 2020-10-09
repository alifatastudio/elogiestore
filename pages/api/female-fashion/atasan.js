export const atasan = [
	{
		"id": "A06E",
		"name": "Savana Pajamas",
		"slug": "savana-pajamas-elogiefemale-elogie",
		"price": 159000,
		"discount": 0,
		"brand": "",
		"color": "",
		"material": "",
		"category": "",
		"description": "\nPanjang Baju Bag. Depan :  71cm\nPanjang Baju Bag. Belakang : 76cm\nLingkar Dada : 106cm\nPanjang Lengan : 58cm\nLingkar Ketiak : 40cm \n\nPanjang Celana : 96cm\nLingkar Pinggang : 56cm\nLingkar Pinggang Saat Ditarik : 114cm\nLingkar Paha : 66cm \n\nP x L masker hijab : 11cm x 12cm \n\nAllsize (Fit atau muat kira2 dari ) S - XL \n\n* Warna : Navy & Mustard\n*Bahan : Katun Rayon\n*Karakteristik lain : Full kancing,Ada Kerah,  Bagian Pinggal Full Karet, Bahan Jatuh & dingin \n\nBisa Dikenakan Sebagai Baju Tidur, Outer, Baju Santai Ataupun Baju Kerja\n* Berat :  360gr",
		"variants": {
			"name": "Warna",
			"variant": [
				{"id": 0, "name": "All", 				"stock": 6, "production": 100, "imageId": 0},
				{"id": 1, "name": "Mustard", "stock": 5, "production": 100, "imageId": 5},
				{"id": 2, "name": "Navy", 			"stock": 1, "production": 100, "imageId": 8},
			]
		},
		"images": [
			{"id": 0, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fA1AQJ6JMq1isRRfA1Dy3GavP6f5gLREWrLX7D5tzz3Q.webp"},
			{"id": 1, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAVXnIqXRxqjsZufA1DyvgTit1S8egRPm5w3cfoPJAwg.webp"},
			{"id": 2, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAQTYZf4MHPY0CEfA1DV53bQGXaac2TPaI16ALUmzivg.webp"},
			{"id": 3, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAVXU8Jf7LzW0LOfA1DVZaTMEtdF2VS56vMWFzc1saSQ.webp"},
			{"id": 4, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fA1ABmGck1XCsKEfA1DVUw8MyEU3e6SRyZ6vvCM7c4NQ.webp"},
			{"id": 5, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fA1A2cxQDCoK01OfA1Dy86HUZAzEU1S5OZ94Medd8oWA.webp"},
			{"id": 6, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAVlehekp55AC4vfA1DyKQu1mvuLBKSyToiYA2okR4g.webp"},
			{"id": 7, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAQTyiZLNUDjLT3fA1DymkY0TYQJd1SUeWzS1w3qIwiw.webp"},
			{"id": 8, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAVmIYAuHEcFCfTfA1DyUdGibrl1ZRC6X7Ch0igvAWg.webp"},
			{"id": 9, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAQnqA4HEOMg0yafA1DpAARU9yFGNQEqUDlI9plQIRQ.webp"},
			{"id": 10, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAQTnvroUjqJftFfA1DyVrbzgvSTxaQklsxDTgtnsQ.webp"},
			{"id": 11, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAQnqA4HEOMg0yafA1Dyl52KBG2xFWT1C54qeFSpSGdA.webp"},
			{"id": 12, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAyjO6R000Oz1fd6fA1DVV4TYnXgjpPTj2koJKES2Xhg.webp"},
			{"id": 13, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAVmIYAuHEcFCfTfA1DpjzLHaHaUtQgemT7ATFRa5Xg.webp"},
			{"id": 14, "url": "https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fAQkC4AWoiQ3fEAfA1DpWxzt9b0aLASr9d4a6MOvBw.webp"},
		]
	},

	
]

export default (req, res) => {
  res.statusCode = 200
  res.json([...atasan])
}