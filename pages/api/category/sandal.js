import { sandal02 } from "../../../resources/PRODUCTS/sandal02"
import { sandal01 } from "../../../resources/PRODUCTS/sandal01"

export default (req, res) => {
  res.statusCode = 200
  res.json([
  	...sandal02.products,
  	...sandal01.products
  ])
}