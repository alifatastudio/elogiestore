import { celana } from "../../../resources/PRODUCTS/celana"
import { rok } from "../../../resources/PRODUCTS/rok"

export default (req, res) => {
  res.statusCode = 200
  res.json([
  	...celana.products,
  	...rok.products
  ])
}