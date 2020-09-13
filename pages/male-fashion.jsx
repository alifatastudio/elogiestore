import React from "react"
import Carousel from "../components/Carousel"
import Products from "../components/Products"
import LayoutMaleFashion from "../components/LayoutMaleFashion"

export default function MaleFashion(){
	return (
		<LayoutMaleFashion title="Solusi Fashion Pria" onCategory="Solusi Fashion Pria">
 			<Carousel />

      <div style={{height: "25px"}} />

      <Products />
		</LayoutMaleFashion>
	)
}