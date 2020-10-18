import GETALLCATEGORY from "../../../services/GETALLCATEGORY"
import CREATECATEGORY from "../../../services/CREATECATEGORY"
import UPDATECATEGORY from "../../../services/UPDATECATEGORY"
import DELETECATEGORY from "../../../services/DELETECATEGORY"

export default async (req, res) => {
	try {
		const {
			method, 
			query: { id },
			body: { name, slug }
		} = req
		
		switch (method) {
	  case 'GET':
	   // Get data from database
	   const allcategory = await GETALLCATEGORY()
	   res.status(200).json(allcategory)
	   break
	  case 'POST':
	  	// Create new data
	  	if(name.length <= 0) return res.status(400).send('Category name required !!')
	  	if(name.slug <= 0) return res.status(400).send('Category slug required !!')
	  	
	  	const new_data = {name: name, slug: slug}
	  	const insertId = await CREATECATEGORY(new_data)
	  	res.status(200).send(insertId)
	  	break
	  case 'PUT':
	   // Update data in database
	   if(id === undefined) return res.status(400).send('Category id required !!')
	  	if(parseFloat(id) <= 0) return res.status(400).send('Category id required !!')
	  	if(name.length <= 0) return res.status(400).send('Category name required !!')
	  	if(name.slug <= 0) return res.status(400).send('Category slug required !!')
	  	
	  	const update_data = {name: name, slug: slug}
	  	await UPDATECATEGORY(id, update_data)
	   res.status(200).send("Update successfully : )")
	   break
	  case 'DELETE':
	  	// Delete data
	  	if(id === undefined) return res.status(400).send('Category id required !!')
	  	if(parseFloat(id) <= 0) return res.status(400).send('Category id required !!')
	  	
	  	await DELETECATEGORY(id)
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