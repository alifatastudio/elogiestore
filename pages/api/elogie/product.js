import GETALLPRODUCT from "../../../services/GETALLPRODUCT"
import CREATEPRODUCT from "../../../services/CREATEPRODUCT"
import UPDATEPRODUCT from "../../../services/UPDATEPRODUCT"
import DELETEPRODUCT from "../../../services/DELETEPRODUCT"

export default async (req, res) => {
	try{
		const {
			method, 
			query: { id },
			body: { 
				code, name, slug, price, discount, status,
				brandId, categoryId,
				description, variants, images
			}
		} = req

		switch(method){
			case 'GET':
				const allproduct = await GETALLPRODUCT()
	   res.status(200).json(allproduct)
				break
			case 'POST':
	  	if(code.length <= 0) return res.status(400).send('Product kode required !!')
	  	if(name.length <= 0) return res.status(400).send('Product name required !!')
	  	if(slug.length <= 0) return res.status(400).send('Product slug required !!')

				const new_data = {
					code, name, slug, price, discount, status,
					brandId, categoryId,description, 
					variants, images
				}
	  	const insertId = await CREATEPRODUCT(new_data)
	  	res.status(200).send(insertId)
				break	
			case 'PUT':
	   if(id === undefined) return res.status(400).send('Product id required !!')
	  	if(parseFloat(id) <= 0) return res.status(400).send('Product id required !!')
	  	if(code.length <= 0) return res.status(400).send('Product kode required !!')
	  	if(name.length <= 0) return res.status(400).send('Product name required !!')
	  	if(slug.length <= 0) return res.status(400).send('Product slug required !!')

	  	const update_data = {
	  		code, name, slug, price, discount, status,
					brandId, categoryId,
					description, variants, images
				}
	  	await UPDATEPRODUCT(id, update_data)
	   res.status(200).send("Update successfully : )")
	   break
	  case 'DELETE':
	  	if(id === undefined) return res.status(400).send('Category id required !!')
	  	if(parseFloat(id) <= 0) return res.status(400).send('Category id required !!')
	  	
	  	await DELETEPRODUCT(id)
	  	res.status(200).send("Delete successfully : )")
	  	break
			default:
				res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
	   res.status(405).end(`Method ${method} Not Allowed`)
		}
	}
	catch(Exception){
		res.status(500).end(`Something went wrong !!`)
	 console.log('Something went wrong !!')
	 console.log(Exception)
	}
}