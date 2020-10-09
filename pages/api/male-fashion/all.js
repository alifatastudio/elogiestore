import { basicTees } from "./basic-tees"
import { stripTees } from "./strip-tees"
import { denimSlimfit } from "./denim-slimfit"
import { chinosSlimfit } from "./chinos-slimfit"
import { chinosDickies } from "./chinos-dickies"
import { jaketParka } from "./jaket-parka"
import { jaketSemiParka } from "./jaket-semi-parka"
import { jaketKimono } from "./jaket-kimono"
import { shortChinos } from "./short-chinos"

export const dataMaleFashion = [
	...basicTees, ...stripTees, ...denimSlimfit, ...chinosSlimfit, ...chinosDickies,
			...jaketParka, ...jaketSemiParka, ...jaketKimono, ...shortChinos
]

export default (req, res) => {
  res.statusCode = 200
  res.json([...dataMaleFashion])
}