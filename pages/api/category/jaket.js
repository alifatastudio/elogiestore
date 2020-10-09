import { jaketSemiParka } from "../../../resources/PRODUCTS/jaketSemiParka"
import { jaketParka } from "../../../resources/PRODUCTS/jaketParka"
import { jaketKimono } from "../../../resources/PRODUCTS/jaketKimono"

export default (req, res) => {
  res.statusCode = 200
  res.json([
  	...jaketSemiParka.products,
  	...jaketParka.products,
  	...jaketKimono.products
  ])
}