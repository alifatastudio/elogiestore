import { outer } from "./outer"
import { atasan } from "./atasan"
import { kerudung } from "./kerudung"
import { kaos } from "./kaos"
import { celana } from "./celana"
import { rok } from "./rok"

export const dataFemaleFashion = [
	...atasan, ...outer, ...kerudung, ...kaos, ...celana, ...rok
]

export default (req, res) => {
  res.statusCode = 200
  res.json([...dataFemaleFashion])
}