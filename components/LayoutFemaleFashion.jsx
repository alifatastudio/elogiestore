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
      name: "Basic Tees V",
      suburl: "/basic-tees"
    },
    {
      id: 3,
      name: "Strip Tees V",
      suburl: "/strip-tees"
    },
    {
      id: 4,
      name: "Chinos Slimfit V",
      suburl: "/chinos-slimfit"
    },
    {
      id: 5,
      name: "Denim Slimfit V",
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
        <div className="w3-card w3-animate-zoom" style={{display: showCategoryMenu?"block":"none", }}>
          <div style={{height: "10px"}} />
          <Link href="/female-fashion" >
            <a className="w3-btn w3-block">All</a>
          </Link>
          {subcategorymenu.map(value => (
            <Link href="/female-fashion/[subcategory]" as={"/female-fashion"+value.suburl} key={value.id}>
              <a className="w3-btn w3-block">{value.name}</a>
            </Link>
          ))}
        </div>
      </div>
      
      <div style={{height: "25px"}} />

     	<div className="w3-row">
     		<div className="w3-col l2 w3-hide-small w3-hide-medium">
     			<div className="w3-bar-block">
            <Link href="/female-fashion" >
              <a className="w3-bar-item w3-button">All</a>
            </Link>
            {subcategorymenu.map(value => (
              <Link href="/female-fashion/[subcategory]" as={"/female-fashion"+value.suburl} key={value.id}>
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