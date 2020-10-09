import React from 'react'
import LayoutStore from "../../components/LayoutStore"

export default function Index(){
  return <LayoutStore />
}

function CekResiPengiriman(){
	return (
		<LayoutStore title="Cek Resi Pengiriman">
			<div className="w3-row">
   		<div className="w3-col l3 w3-hide-small w3-hide-medium" ><p style={{fontSize: "25px", float: "right"}}>&#128526;</p></div>
   		<div className="w3-col l6">
            <h1 style={{textAlign: "center"}}>Bagaimana Cek Resi Pengiriman?</h1>
   			<p style={{textAlign: "center"}}>
               <span className="w3-hide-large">&#128526; &#128522;</span><br/>
               Untuk cek resi pengiriman LOGIER bisa menggunakan situs web pengiriman resmi atau situs <a href="https://cekresi.com" target="_blank"><em>cekresi.com</em></a> ataupun situs terpercaya pihak lainnya.
               Kami juga akan membantu pengecekan resi pengiriman dan memberi tahu jika paket kiriman telah sampai pada tujuan &#128522;			
   			</p>
   		</div>
   		<div className="w3-col l3 w3-hide-small w3-hide-medium" ><p style={{fontSize: "25px"}}>&#128522;</p></div>  		
   	</div>
		</LayoutStore>
	)
}