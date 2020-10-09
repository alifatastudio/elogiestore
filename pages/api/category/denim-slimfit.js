import { denimSlimfit } from "../../../resources/PRODUCTS/denimSlimfit"

export default (req, res) => {
  res.statusCode = 200
  res.json([...denimSlimfit.products])
}