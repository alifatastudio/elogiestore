import { kerudung } from "../../../resources/PRODUCTS/kerudung"

export default (req, res) => {
  res.statusCode = 200
  res.json([...kerudung.products])
}