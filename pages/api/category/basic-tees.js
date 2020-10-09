import { basicTees } from "../../../resources/PRODUCTS/basicTees"

export default (req, res) => {
  res.statusCode = 200
  res.json([...basicTees.products])
}