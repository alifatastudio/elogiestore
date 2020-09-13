import React from 'react'
import Link from "next/link"
import NumberFormat from "react-number-format"

export default function Products({resource=[]}){
	return (
		<div className="w3-row-padding">
			{resource.map(value => (
				<Link href="/p/[slug]" as={"/p/"+ value.slug} key={value.id}>
					<a id="x_" className="w3-col s6 m3 l2" >
	     <div id="product-card" className="w3-card-4" style={{
	       width: "100%", marginBottom: "25px" }}>

	       <img src={value.images[0]} alt="Alps" style={{width:"100%"}} />
	       <div className="w3-container">
	         <p id="p_">{value.name.substr(0,25)}...<br/>
	           <i>
               <NumberFormat 
                  value={value.price} 
                  displayType={'text'} 
                  thousandSeparator={true} 
                  prefix={'Rp '} 
               />
            </i>
	         </p>
	       </div>
	     </div>
	   </a>
	   </Link>
			))}

			<style jsx>{`
				a {
					text-decoration: none;
				}

				#x_ {
					cursor: pointer;
				}

				#x_:hover {
					opacity: 0.8;
				}
			`}</style>
  </div>
	)
}