import React from "react"
import Carousel from "../components/Carousel"
import Products from "../components/Products"
import LayoutFemaleFashion from "../components/LayoutFemaleFashion"

export default function FemaleFashion(){
	return (
		<LayoutFemaleFashion title="Solusi Fashion Wanita" onCategory="Solusi Fashion Wanita">
 			<Carousel />

      <div style={{height: "25px"}} />

      <Products />
		</LayoutFemaleFashion>
	)
}