import { kemejaWanita } from "../../../resources/PRODUCTS/kemejaWanita"

export default (req, res) => {
  res.statusCode = 200
  res.json([...kemejaWanita.products])
}