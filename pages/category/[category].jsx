import { useRouter } from "next/router"
import React from "react"
import Axios from 'axios'
import LayoutStore from "../../components/LayoutStore"
import { generateTitle } from "../../components/myFunc"
import { fakeproducts } from "../../components/faker"

export default function Category(){
	const router = useRouter()
 const { category } = router.query
 const [products, setProducts] = React.useState([...fakeproducts])
 
 const title = generateTitle(category)

 React.useEffect(() => {
   function getData(){
     if(typeof category !== 'string') return ""
     Axios.get("/api/category/"+category).then(res => {
       setProducts(res.data)
     }).catch(err => {
       console.log(err)
     })
   }
   
   getData()
 }, [category])

 return <LayoutStore 
    title={title} 
    pageTitle={products[0].category} 
    products={products} 
  />
}