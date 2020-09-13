import React from "react"
import Link from "next/link"
import Carousel from "./Carousel"
import Products from "./Products"
import LayoutDefault from "./LayoutDefault"

export default function MaleFashion(props){
  const [showCategoryMenu, setShowCategoryMenu] = React.useState(false)

  const subcategorymenu = [
    {
      id: 2,
      name: "Basic Tees",
      suburl: "/basic-tees"
    },
    {
      id: 3,
      name: "Strip Tees",
      suburl: "/strip-tees"
    },
    {
      id: 4,
      name: "Jaket Parka",
      suburl: "/jaket-parka"
    },
    {
      id: 5,
      name: "Jaket Semi Parka",
      suburl: "/jaket-semi-parka"
    },
    {
      id: 6,
      name: "Jaket Kimono",
      suburl: "/jaket-kimono"
    },
    {
      id: 7,
      name: "Chinos Slimfit",
      suburl: "/chinos-slimfit"
    },
    {
      id: 8,
      name: "Chinos Dickies",
      suburl: "/chinos-dickies"
    },
    {
      id: 9,
      name: "Short Chinos",
      suburl: "/short-chinos"
    },
    {
      id: 10,
      name: "Denim Slimfit",
      suburl: "/denim-slimfit"
    }
  ]

  const toggleSubCategoryMenu = () => {
    setShowCategoryMenu(prevState => {
      return !prevState
    })
  }

	return (
		<LayoutDefault title={props.title} onCategory={props.onCategory}>
      {/* Sub Menu on Mobile*/}
      <div className="w3-hide-large">
        <div className="w3-btn w3-block w3-card-4" onClick={toggleSubCategoryMenu}>
          {props.onSubCategory === undefined? "All": props.onSubCategory} <em><small>(pilih sub-kategori)</small></em>
        </div>
        <div className="w3-card" style={{display: showCategoryMenu?"block":"none"}}>
          <div style={{height: "10px"}} />
          <Link href="/male-fashion" >
            <a className="w3-btn w3-block">All</a>
          </Link>
          {subcategorymenu.map(value => (
            <Link href="/male-fashion/[subcategory]" as={"/male-fashion"+value.suburl} key={value.id}>
              <a className="w3-btn w3-block">{value.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <div style={{height: "25px"}} />

     	<div className="w3-row">
     		<div className="w3-col l2 w3-hide-small w3-hide-medium">
     			<div className="w3-bar-block">
            <Link href="/male-fashion" >
              <a className="w3-bar-item w3-button">All</a>
            </Link>
            {subcategorymenu.map(value => (
              <Link href="/male-fashion/[subcategory]" as={"/male-fashion"+value.suburl} key={value.id}>
                <a className="w3-bar-item w3-button">{value.name}</a>
              </Link>
            ))}
  				</div>
     		</div>
     		<div className="w3-col s12 l10">
     			{props.children}
     		</div>
     	</div>
		</LayoutDefault>
	)
}