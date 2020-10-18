import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Axios from 'axios'
import NumberFormat from "react-number-format"
import LayoutStore from "../../components/LayoutStore"
import Loader from "../../components/Loader"
import BannerCategory from "../../components/BannerCategory"
import { generateTitle } from "../../components/myFunc"
import { fakeproduct } from "../../components/faker"
import { fakeloader } from "../../components/faker"

export default function Category(){
 const router = useRouter()
 const { slug } = router.query
 const [products, setProducts] = React.useState([{...fakeproduct}])
 const [allCategory, setAllCategory] = React.useState([])
 const [loader, setLoader] = React.useState({...fakeloader}) 

 const title = generateTitle(slug)

 const GETCATEGORYNAMEPRODUCT = categoryId => {
  const x = allCategory.filter(y => y.id === parseFloat(categoryId))
  if(x.length <= 0) return "milikisekarang"
  if(x.[0].name === undefined) return "milikisekarang"
  const y = x.[0].name
  const z = y.replace(/\s/g,'');
  return z
 }

 React.useEffect(() => {
  async function POPULATEFIRSTDATA(){
   try{
    if(typeof slug !== 'string') return ""
    if(slug === undefined) return ""

    const y = await Axios.get('/api/elogie/category')
    const x = await Axios.get("/api/category/"+slug)
    setAllCategory([...y.data])
    setProducts([...x.data])
    setLoader({
     ...fakeloader,
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
   <BannerCategory />

   {loader.isError? 
    <p style={{textAlign: "center" }}>{loader.errorMessage}</p>
   :null}
   
   {loader.isLoadingTheProduct ? <Loader />: 
    !loader.isError ?
     <div className="w3-animate-fading-x">

      <div 
       className="w3-container w3-text-grey"
      >
       <p>{products.length} items</p>
      </div>

      {/* Product Grid */}
      <div className="w3-row">
       {products.map(value => (
        <div className="w3-col l3 s6" key={value.id}>
         <Link href="/product/[slug]" as={"/product/"+value.slug} >
          <div className="w3-container" style={{cursor: "pointer"}}>
           <div className="w3-display-container">
            <img src={value.images[0].url} style={{width:"100%"}} />
            
            <span 
             className={`w3-tag w3-display-topright ${value.status !== null ? value.status.toLowerCase() === "sold out"?"w3-theme":"w3-red": ""}`}
            >{value.status}</span>
           
            <p>{value.name}<br/>
             {parseFloat(value.discount) > 0 ?
              <b><i><del>
               <NumberFormat 
                value={value.price} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rp '} 
               /></del></i>
               <NumberFormat 
                value={((100-parseFloat(products[1].discount))/100) * parseFloat(products[1].price)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'  Rp '} 
                decimalScale={0}
               />
              </b>:
              <b>
               <NumberFormat 
                value={value.price} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rp '} 
               />
              </b>
             }
             <br/>
             <span className="w3-tag w3-theme w3-round-large">
               #{GETCATEGORYNAMEPRODUCT(value.categoryId)}
             </span>
            </p>
           </div>
          </div>
         </Link>
        </div>
       ))}
      </div> 
     </div>
    : null
   }
  </LayoutStore>
 )
}