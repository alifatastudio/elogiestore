import { basicTees } from "../../../resources/PRODUCTS/basicTees"
import { stripTees } from "../../../resources/PRODUCTS/stripTees"
import { chinoSlimfit } from "../../../resources/PRODUCTS/chinoSlimfit"
import { denimSlimfit } from "../../../resources/PRODUCTS/denimSlimfit"
import { chinoDickies } from "../../../resources/PRODUCTS/chinoDickies"
import { cargoPants } from "../../../resources/PRODUCTS/cargoPants"
import { shortCargoPants } from "../../../resources/PRODUCTS/shortCargoPants"
import { jaketSemiParka } from "../../../resources/PRODUCTS/jaketSemiParka"
import { jaketParka } from "../../../resources/PRODUCTS/jaketParka"
import { jaketKimono } from "../../../resources/PRODUCTS/jaketKimono"
import { tunik } from "../../../resources/PRODUCTS/tunik"
import { blouse } from "../../../resources/PRODUCTS/blouse"
import { kaos } from "../../../resources/PRODUCTS/kaos"
import { kerudung } from "../../../resources/PRODUCTS/kerudung"
import { celana } from "../../../resources/PRODUCTS/celana"
import { rok } from "../../../resources/PRODUCTS/rok"
import { cardygan } from "../../../resources/PRODUCTS/cardygan"
import { kemejaWanita } from "../../../resources/PRODUCTS/kemejaWanita"
import { sandal01 } from "../../../resources/PRODUCTS/sandal01"
import { sandal02 } from "../../../resources/PRODUCTS/sandal02"
import { sepatu01 } from "../../../resources/PRODUCTS/sepatu01"
import { sepatu02 } from "../../../resources/PRODUCTS/sepatu02"
import { sepatu03 } from "../../../resources/PRODUCTS/sepatu03"

export default (req, res) => {
	const {
   query: { slug },
 } = req

	const allproduct = [
	 ...basicTees.products,
	 ...stripTees.products,
	 ...chinoSlimfit.products,
	 ...denimSlimfit.products,
	 ...chinoDickies.products,
	 ...cargoPants.products,
	 ...shortCargoPants.products,
 	...jaketSemiParka.products,
		...jaketParka.products,
		...jaketKimono.products,
		...tunik.products,
		...blouse.products,
		...kaos.products,
		...kerudung.products,
		...celana.products,
		...rok.products,
		...cardygan.products,
		...kemejaWanita.products,
		...sandal01.products,
		...sandal02.products,
		...sepatu01.products,
		...sepatu02.products,
  ...sepatu03.products,
	]

	const getData = allproduct.filter(value => value.slug === slug)

 res.statusCode = 200
 res.json({...getData[0]})
}