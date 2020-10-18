import GETPRODUCTBYCODE from "../../../services/GETPRODUCTBYCODE"

export default async (req, res) => {
	try{
		const {
			method,
	  query: { code },
	 } = req

	 if(method !== 'GET') return res.status(405).end(`Method ${method} Not Allowed`)
	 if(code === undefined) return res.status(400).send('Product code required !!')
	 if(code.length <= 0) return res.status(400).send('Product code required !!')
	 
	 const result = await GETPRODUCTBYCODE(code)
		if(result === null) return res.status(404).send("Tidak dapat menemukan produk !!")

		res.status(200).send(result)
	}
	catch(Exception){
		res.status(500).end(`Something went wrong !!`)
	 console.log('Something went wrong !!')
	 console.log(Exception)
	} 
}