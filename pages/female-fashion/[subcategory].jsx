import { useRouter } from "next/router"
import React from "react"
import Carousel from "../../components/Carousel"
import Products from "../../components/Products"
import LayoutFemaleFashion from "../../components/LayoutFemaleFashion"

export default function FemaleFashion(){
  const router = useRouter()
  const { subcategory } = router.query

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

  return (
    <LayoutFemaleFashion 
      title={x_ + "Solusi Fashion Wanita" } 
      onSubCategory={x_}
      onCategory="Solusi Fashion Wanita"
    >
      <Carousel />

      <div style={{height: "25px"}} />

      <Products />
    </LayoutFemaleFashion>
  )
}