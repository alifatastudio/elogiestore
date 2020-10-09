import { chinoDickies } from "../../../resources/PRODUCTS/chinoDickies"

export default (req, res) => {
  res.statusCode = 200
  res.json([...chinoDickies.products])
}