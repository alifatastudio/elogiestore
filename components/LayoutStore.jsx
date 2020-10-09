import Head from "next/head"
import Link from "next/link"
import React from "react"
import NumberFormat from "react-number-format"
import { category } from "../resources/category"
import { media } from "../resources/media"

export default function LayoutStore({
	title="", pageTitle="", products=[], type="", children
}){
	const [idShow, setIdShow] = React.useState("")
	const [sidebarShow, setSidebarShow] = React.useState(false)
	const d = new Date()

	const close = () => {
		setSidebarShow(false)
	}

	const open = () => {
		setSidebarShow(true)
	}	

	const showThisId = idshow => () => {
		setIdShow(prevState => {
			if(prevState === idshow) return ""
			return idshow
		})
	}

	return (<>
			<div id="body" className="w3-content" style={{maxWidth:"1200px"}}>
				<Head>
					<title>Elogie Store | {title} </title>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				
					<link rel="icon" href="/favicon.jpg" sizes="20x20" type="image/png" />
					
				</Head>

				{/* Sidebar/menu */}
				<nav className="w3-sidebar w3-bar-block w3-theme-white w3-collapse w3-top" style={{zIndex:"3",width:"250px", display: sidebarShow?"block":"none"}} id="mySidebar">
				  <div className="w3-container w3-display-container w3-padding-16">
				    <i onClick={close} className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
			    	<h3 className="w3-wide">
				    	<Link href="/">
				    		<b style={{cursor: "pointer"}}>ELOGIE</b>
				    	</Link>
			    	</h3>
				  </div>

  				<div className="w3-padding-64 w3-large w3-text-grey" style={{fontWeight:"bold", color: "#808080"}}>
						 <Link href="/">
						 	<a className="w3-bar-item w3-button w3-light-grey">Home</a>
						 </Link>
			    {category.map(value => (
			    		<React.Fragment key={value.id}>
			    			<button onClick={showThisId(value.id)} className="w3-button w3-block w3-white w3-left-align" id="myBtn">
			      		{value.name} <i className="fa fa-caret-down"></i>
			    			</button>
			    			<div id={value.id} className={`w3-bar-block ${idShow === value.id? "w3-show": "w3-hide"} w3-padding-large w3-medium`}>
						      {value.subcategory.map(subvalue => (
						 						<Link href="/category/[category]" as={"/category/"+subvalue.url} key={subvalue.id}>
						      		<a className="w3-bar-item w3-button w3-light-grey">{subvalue.name}</a>
						 						</Link>
						      ))}
						    </div>
			    		</React.Fragment>
			    ))}
			  	</div>

			  	<Link href="/blog/metode-pembayaran">
				  	<a className="w3-bar-item w3-button w3-padding">Metode Pembayaran</a> 
			  	</Link>
			  	<Link href="/blog/konfirmasi-pembayaran">
				  	<a className="w3-bar-item w3-button w3-padding">Konfirmasi Pembayaran</a> 
			  	</Link>
				</nav>

				{/* Top Menu on Small Screen */}
				<header className="w3-bar w3-top w3-hide-large w3-theme w3-xlarge">
  			<div className="w3-bar-item w3-padding-24 w3-wide">ELOGIE</div>
  			<a href="#" className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={open}><i className="fa fa-bars"></i></a>
				</header>

				{/* Top Menu on Small Screen */}
				<div className="w3-overlay w3-hide-large" onClick={close} style={{cursor: "pointer", display: sidebarShow?"block":"none"}} title="close side menu" id="myOverlay"></div>

				{/* Page Content */}
				<div className="w3-main" style={{marginLeft:"250px"}}>
					{/* Push Down on Small Screen */}
					<div className="w3-hide-large" style={{marginTop:"83px"}}></div>

					{/* Top Header */}
					<header className="w3-container w3-xlarge">
			    <p className={`w3-left`}>{pageTitle}</p>
			    <p className="w3-right">
			      <i className="fa fa-shopping-cart w3-margin-right"></i>
			      <i className="fa fa-search"></i>
			    </p>
			  </header>
			  {products.length > 0 ?
			  	<React.Fragment>
			  		<div className="w3-container w3-text-grey">
		    		<p>{products.length} items</p>
		  			</div>

		  			{/* Product Grid */}
		  			<div className="w3-row">
		  				{products.map(value => (
		  					<div className="w3-col l3 s6" key={value.id}>
		  						<Link href="/product/[slug]" as={"/product/"+value.slug} >
				  					<div className="w3-container" style={{cursor: "pointer"}}>
					        <img src={value.images[0].url} style={{width:"100%"}} />
					        <p>{value.name}<br/>
						        <b>
							        	<NumberFormat 
					            value={value.price} 
					            displayType={'text'} 
					            thousandSeparator={true} 
					            prefix={'Rp '} 
					           />
				           </b>
			           </p>
					      </div>
					     </Link>
			  				</div>
		  				))}
		  			</div>
			  	</React.Fragment>: null
			  }

			  {type === "CHILDREN" ? children : null}

  			<footer className="w3-padding-64 w3-theme w3-center" id="footer">
  				<div className="w3-row-padding">
      	<div className="w3-col m6">
        <img src="/images/logo.jpg" style={{width: "100%"}} />
      	</div>
      	<div className="w3-col m6 ">
      		<h4>Kontak Sosial Media</h4>
        <p>Ikuti sosial media kami dan dapatkan info menarik, tips, trik, diskon, promo, dan info seru lainnya. Hubungi kami jika kapanpun LOGIER ingin di jam kerja kami. &#128522;</p>
      		<div className="w3-justify">
      			{media.map(value => (
										<div key={value.id}>
											<a href={"#" + value.name} className="w3-button"><i className={value.icon}></i></a>
					  				<a id={value.name} href={value.url} className="w3-button" target="_blank">{value.name}</a>
										</div>
									))}
      		</div>
      	</div>
  				</div>

						<div style={{marginTop: "64px", textAlign: "center"}} >
			    <span className="w3-button">
			    	&copy; Copyright {d.getFullYear()} elogie
			    </span>
			   </div>
  			</footer>

				</div>

				<style jsx>{`
					.w3-sidebar a {font-family: "Roboto", sans-serif}
      #body,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}
				`}</style>
			</div>
  </>
	)
}