import { blouse } from "../../../resources/PRODUCTS/blouse"

export default (req, res) => {
  res.statusCode = 200
  res.json([...blouse.products])
}