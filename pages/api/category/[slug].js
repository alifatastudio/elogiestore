import GETALLPRODUCTBYCATEGORY from "../../../services/GETALLPRODUCTBYCATEGORY"

export default async (req, res) => {
	try{
		const {
			method,
	  query: { slug },
	 } = req

	 if(method !== 'GET') return res.status(405).end(`Method ${method} Not Allowed`)
	 if(slug === undefined) return res.status(400).send('Category slug required !!')
	 if(slug.length <= 0) return res.status(400).send('Category slug required !!')

	 const result = await GETALLPRODUCTBYCATEGORY(slug)
		if(result === null) return res.status(404).send("Tidak dapat menemukan produk !!")

		res.status(200).send(result)
	}
	catch(Exception){
		res.status(500).end(`Something went wrong !!`)
	 console.log('Something went wrong !!')
	 console.log(Exception)
	}
}