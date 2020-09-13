import React from 'react'
import Carousel from '../components/Carousel'
import Products from '../components/Products'
import Category from '../components/Category'
import LayoutDefault from "../components/LayoutDefault"

export default function Home() {

  return (
    <LayoutDefault title="Created for Your Satisfaction">
        <Carousel /> 

        <div style={{height: "25px"}} />

        {/* CABANG */}
        <Category />
        {/* CABANG */}

        <div style={{height: "25px"}} />

        {/* SOME PRODUCTS */}
        
        {/* SOME PRODUCT */}
    </LayoutDefault>
  )
}
