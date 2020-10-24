import Link from "next/link"
import NumberFormat from "react-number-format"

export default function ProductList({
	allproduct=[]
}){
	return (
		<div className="w3-row">
	  {allproduct.map(value => (
	   <div className="w3-col l3 s6" key={value.id}>
	    <Link href="/product/[slug]" as={"/product/"+value.slug} >
	     <div className="w3-container" style={{cursor: "pointer"}}>
	      <div className="w3-display-container">
	       <img src={value.images[0].url} style={{width:"100%"}} />
	       
	       <span 
	        className={`w3-tag w3-display-topright ${value.status !== null ? value.status.toLowerCase() === "sold out"?"w3-theme":"w3-red": ""}`}
	       >{value.status}</span>
	      
	       <p>{value.name}<br/>
	        {parseFloat(value.discount) > 0 ?
	         <b><i><del>
	          <NumberFormat 
	           value={value.price} 
	           displayType={'text'} 
	           thousandSeparator={true} 
	           prefix={'Rp '} 
	          /></del></i>
	          <NumberFormat 
	           value={((100-parseFloat(value.discount))/100) * parseFloat(value.price)} 
	           displayType={'text'} 
	           thousandSeparator={true} 
	           prefix={'  Rp '} 
	           decimalScale={0}
	          />
	         </b>:
	         <b>
	          <NumberFormat 
	           value={value.price} 
	           displayType={'text'} 
	           thousandSeparator={true} 
	           prefix={'Rp '} 
	          />
	         </b>
	        }
	        <br/>
	        <span className="w3-tag w3-theme w3-round-large">
	          #{value.categoryName.replace(/\s/g,'')}
	        </span>
	       </p>
	      </div>
	     </div>
	    </Link>
	   </div>
	  ))}
	 </div>
	)
}