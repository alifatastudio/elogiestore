import { chinoSlimfit } from "../../../resources/PRODUCTS/chinoSlimfit"

export default (req, res) => {
  res.statusCode = 200
  res.json([...chinoSlimfit.products])
}