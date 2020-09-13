import React from "react"
import Link from "next/link"

export default function Navbar(props){
  const [showCategoryMenu, setShowCategoryMenu] = React.useState(false)

  const categorymenu = [
    {
      id: 1, 
      name: "Solusi Fashion Pria",
      url: "/male-fashion"
    },
    {
      id: 2, 
      name: "Solusi Fashion Wanita",
      url: "/female-fashion"
    },
    {
      id: 3, 
      name: "Solusi Furniture Keluarga",
      url: "/furniture"
    }
  ]

  const toggleCategoryMenu = () => {
    setShowCategoryMenu(prevState => {
      return !prevState
    })
  }

	return (
    <div>
      <div className="w3-theme w3-hide-small w3-hide-medium" style={{height: "50px"}} />
      <div className="w3-theme w3-hide-large" style={{height: "50px"}} />
      {/*  Category Menu on Mobile*/}
      <div className="w3-hide-large">
        <div className="w3-btn w3-block w3-card-4" onClick={toggleCategoryMenu}>
          {props.onCategory=== undefined?"":props.onCategory} <em><small>(pilih kategori solusi)</small></em>
        </div>
        <div className="w3-card w3-animate-zoom" style={{display: showCategoryMenu?"block":"none", }}>
          <div style={{height: "10px"}} />
          {categorymenu.map(value => (
            <Link href={value.url} key={value.id}>
              <a className="w3-btn w3-block">{value.name}</a>
            </Link>
          ))}
        </div>
      </div>

      {/*  Category Menu on Tablet, Laptop */}
  		<div id="navbar" className="w3-theme w3-container w3-hide-small w3-hide-medium">
        <div className="" style={{position: "relative", textAlign: "center"}}>
          {categorymenu.map(value => (
            <Link href={value.url} key={value.id}>
              <a className="w3-button">{value.name}</a>
            </Link>
          ))}
        </div>

        <style jsx>{`
        	#navbar {
        		box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);
        	}
        `}</style>
      </div>
    </div>
	)
}