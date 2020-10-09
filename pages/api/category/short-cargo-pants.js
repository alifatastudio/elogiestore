import { shortCargoPants } from "../../../resources/PRODUCTS/shortCargoPants"

export default (req, res) => {
  res.statusCode = 200
  res.json([...shortCargoPants.products])
}