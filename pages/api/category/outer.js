import { cardygan } from "../../../resources/PRODUCTS/cardygan"

export default (req, res) => {
  res.statusCode = 200
  res.json([...cardygan.products])
}