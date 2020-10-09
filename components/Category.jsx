import React from 'react';
import Link from "next/link"

export default function Category(){
	const [data, setData] = React.useState([1,2,3])
	
	const malefashion = {
		id: 1,
			name: "Male Fashion",
			mediaurl: `/images/male-fashion.jpg`,
			url: `/male-fashion`
	}

	const femalefashion = {
		id: 2,
			name: "Female Fashion",
			mediaurl: `https://img.bdjkt.com/img/1200/bfz2vqtcbf13p9qiru/fClLOIcstKHIieDfCznbmG7wE2kRLAT3KqKZ08hZcsgA.webp`,
			url: `/female-fashion`
	}

	const furniture = {
		id: 3,
			name: "Furniture",
			mediaurl: `/images/furniture.png`,
			url: `/furniture`
	}

	return (
		<div id="categories" className="w3-row-padding">
				{/* Male Fashion */}
				<div className="w3-col s6 m4">
					<Link href="/male-fashion">
	     <div id="boxcategory" className="w3-card-4" style={{marginBottom: "25px"}}>
	       <div className="w3-row">
	         <div className="w3-col m6">
	           <img src={malefashion.mediaurl} alt={malefashion.name} style={{width:"100%"}} />
	         </div>
	         <div className="w3-col m6">
	           <div className="w3-display-container textcontainer">
	           	<h3 className="w3-display-middle">{malefashion.name}</h3>
	           </div>
	         </div>
	       </div>
	     </div>
	     </Link>
	   </div>

				{/* Female Fashion */}
	   <div className="w3-col s6 m4">
	   	<Link href="/female-fashion">
	     <div id="boxcategory" className="w3-card-4" style={{marginBottom: "25px"}}>
	       <div className="w3-row">
	         <div className="w3-col m6">
	           <img src={femalefashion.mediaurl} alt={femalefashion.name} style={{width:"100%"}} />
	         </div>
	         <div className="w3-col m6">
	           <div className="w3-display-container textcontainer">
	           	<h3 className="w3-display-middle">{femalefashion.name}</h3>
	           </div>
	         </div>
	       </div>
	     </div>
	     </Link>
	   </div>

	  {/* Furniture */}
	   <div className="w3-col s12 m4">
	   	<Link href="/furniture">
	     <div id="boxcategory" className="w3-card-4" style={{marginBottom: "25px"}}>
	       <div className="w3-row">
	         <div className="w3-col s6">
	           <img src={furniture.mediaurl} alt={furniture.name} style={{width:"100%"}} />
	         </div>
	         <div className="w3-col s6">
	           <div className="w3-display-container textcontainer">
	           	<h3 className="w3-display-middle">{furniture.name}</h3>
	           </div>
	         </div>
	       </div>
	     </div>
	    </Link>
	   </div>

	   <style jsx>{`
	   	.textcontainer {
	   			height: 120px; 
	   			width: 100%;
	   	}
	   	#boxcategory {
	   		cursor: pointer;
	   	}
	   	@media (min-width:993px){
	   		.textcontainer {
		   			heigh
		   			t: 160px; 
		   			width: 100%;
		   	}
	   	}
	   `}</style>
	 </div>  
	)
}