import { kaos } from "../../../resources/PRODUCTS/kaos"

export default (req, res) => {
  res.statusCode = 200
  res.json([...kaos.products])
}