import GETALLBRAND from "../../../services/GETALLBRAND"
import CREATEBRAND from "../../../services/CREATEBRAND"
import UPDATEBRAND from "../../../services/UPDATEBRAND"
import DELETEBRAND from "../../../services/DELETEBRAND"

export default async (req, res) => {
	try{
		const {
			method, 
			query: { id },
			body: { name, slug }
		} = req

		switch(method) {
			case 'GET':
				// Get data from database
	   const allbrand = await GETALLBRAND()
	   res.status(200).json(allbrand)
				break
			case 'POST':
	  	// Create new data
	  	if(name.length <= 0) return res.status(400).send('Brand name required !!')
	  	if(name.slug <= 0) return res.status(400).send('Brand slug required !!')
	  	
	  	const new_data = {name: name, slug: slug}
	  	const insertId = await CREATEBRAND(new_data)
	  	res.status(200).send(insertId)
	  	break
	  case 'PUT':
	   // Update data in database
	   if(id === undefined) return res.status(400).send('Brand id required !!')
	  	if(parseFloat(id) <= 0) return res.status(400).send('Brand id required !!')
	  	if(name.length <= 0) return res.status(400).send('Brand name required !!')
	  	if(name.slug <= 0) return res.status(400).send('Brand slug required !!')
	  	
	  	const update_data = {name: name, slug: slug}
	  	await UPDATEBRAND(id, update_data)
	   res.status(200).send("Update successfully : )")
	   break
	  case 'DELETE':
	  	// Delete data
	  	if(id === undefined) return res.status(400).send('Brand id required !!')
	  	if(parseFloat(id) <= 0) return res.status(400).send('Brand id required !!')
	  	
	  	await DELETEBRAND(id)
	  	res.status(200).send("Delete successfully : )")
	  	break
			default:
	   res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
	   res.status(405).end(`Method ${method} Not Allowed`)
		}
	}
	catch(Exception) {
	 res.status(500).end(`Something went wrong !!`)
	 console.log('Something went wrong !!')
	 console.log(Exception)
	}
}