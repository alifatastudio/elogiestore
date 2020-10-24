import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Axios from 'axios'
import LayoutStore from "../../components/LayoutStore"
import Loader from "../../components/Loader"
import Banner from "../../components/Banner"
import ProductList from "../../components/ProductList"
import * as Faker from "../../library/Faker"
import GenerateTitle from "../../library/GenerateTitle"

export default function Category(){
 const router = useRouter()
 const { slug } = router.query
 const [allProduct, setAllProduct] = React.useState([{...Faker.fakeproduct}])
 const [loader, setLoader] = React.useState({...Faker.fakeloader}) 
 const title = GenerateTitle(slug)

 React.useEffect(() => {
  async function POPULATEFIRSTDATA(){
   try{
    if(typeof slug !== 'string') return ""
    if(slug === undefined) return ""

    const x = await Axios.get("/api/category/"+slug)
    setAllProduct([...x.data])
    setLoader({
     ...Faker.fakeloader,
     isLoadingTheProduct: false,
    })
   }
   catch(error){
    setLoader(prevState => {
     const x = error.response.data
     const y = "Kesalahal terjadi !! Coba ulangi beberapa saat lagi atau jangan ragu untuk segera hubungi kami : )"
     const z = {
      ...prevState,
      isLoadingTheProduct: false,
      isError: true,
     }
     if(x === undefined) return {...z, errorMessage: y}
     return {...z, errorMessage: x}
    })
    console.log(error)
   }
  }
   
  POPULATEFIRSTDATA()
 }, [slug])

 return (
  <LayoutStore title={title}>
   <Banner />

   {loader.isError? 
    <p style={{textAlign: "center" }}>{loader.errorMessage}</p>
   :null}
   
   {loader.isLoadingTheProduct ? <Loader />: 
    !loader.isError ?
     <div className="w3-animate-fading-x">

      <div 
       className="w3-container w3-text-grey"
      >
       <p>{allProduct.length} items</p>
      </div>

      <ProductList allproduct={allProduct} />
       
     </div>
    : null
   }
  </LayoutStore>
 )
}