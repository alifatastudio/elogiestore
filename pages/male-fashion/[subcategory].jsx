import { useRouter } from "next/router"
import React from "react"
import Axios from 'axios'
import Carousel from "../../components/Carousel"
import Products from "../../components/Products"
import LayoutMaleFashion from "../../components/LayoutMaleFashion"

export default function MaleFashion(){
  const router = useRouter()
  const { subcategory } = router.query
  const [dataProducts, setDataProducts] = React.useState([])

  function setTitle(value) {
    if(typeof value !== 'string') return ""
    if(value.length < 1) return "" 

    let a_ = value.split("-")
    let b_ = ""
    for (var i = 0; i < a_.length; i++) {
      b_ = b_ + a_[i].charAt(0).toUpperCase() + a_[i].slice(1)  + " "
    }
    return b_
  }
  
  const x_ = setTitle(subcategory)

  React.useEffect(() => {
    function getData(){
      if(typeof subcategory !== 'string') return ""
      Axios.get("/api/male-fashion/"+subcategory).then(res => {
        setDataProducts(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
    
    getData()
  }, [subcategory])

  return (
    <LayoutMaleFashion 
      title={x_ + "Solusi Fashion Pria" }
      onCategory="Solusi Fashion Pria" 
      onSubCategory={x_}
    >
      <Carousel />

      <div style={{height: "25px"}} />

      <Products resource={dataProducts}/>

    </LayoutMaleFashion>
  )
}
