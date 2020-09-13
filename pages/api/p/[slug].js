import { dataMaleFashion } from "../male-fashion/all"

export default (req, res) => {
		const {
    query: { slug },
  } = req
		
		const allproduct = [
			...dataMaleFashion
		]

		const getData = allproduct.filter(value => value.slug === slug)
				
  res.statusCode = 200
  res.json({...getData[0]})
}
