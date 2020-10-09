import { cargoPants } from "../../../resources/PRODUCTS/cargoPants"

export default (req, res) => {
  res.statusCode = 200
  res.json([...cargoPants.products])
}