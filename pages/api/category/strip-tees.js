import { stripTees } from "../../../resources/PRODUCTS/stripTees"

export default (req, res) => {
  res.statusCode = 200
  res.json([...stripTees.products])
}