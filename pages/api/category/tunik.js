import { tunik } from "../../../resources/PRODUCTS/tunik"

export default (req, res) => {
  res.statusCode = 200
  res.json([...tunik.products])
}