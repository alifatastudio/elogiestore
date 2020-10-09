import { sepatu01 } from "../../../resources/PRODUCTS/sepatu01"
import { sepatu02 } from "../../../resources/PRODUCTS/sepatu02"
import { sepatu03 } from "../../../resources/PRODUCTS/sepatu03"

export default (req, res) => {
	const sepatu = [
		...sepatu01.products,
 	...sepatu02.products,
 	...sepatu03.products
	]

  res.statusCode = 200
  res.json(sepatu)
}