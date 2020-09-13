import React from 'react'
import Carousel from '../components/Carousel'
import LayoutDefault from "../components/LayoutDefault"

export default function Home() {

  return (
    <LayoutDefault title="Created for Your Satisfaction" onCategory="Solusi Furniture Keluarga">
        <Carousel /> 

        <div style={{height: "25px"}} />
        <p style={{textAlign: "center"}}>
            <em>Grand Opening Soon</em> &#128526; &#128522;
        </p>
    </LayoutDefault>
  )
}
