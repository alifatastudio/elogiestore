import React from 'react'
import LayoutDefault from "../../components/LayoutDefault"

export default function KonfirmasiPembayaran(){
	return (
		<LayoutDefault title="Konfirmasi Pembayaran">
			<div className="w3-row-padding">
   		<div className="w3-col l3 w3-hide-small w3-hide-medium" ><p style={{fontSize: "25px", float: "right"}}>&#128526;</p></div>
   		<div className="w3-col l6">
            <h1 style={{textAlign: "center"}}>Bagaimana Cara Konfirmasi Pembayaran?</h1>
   			<p style={{textAlign: "center"}}>
            <span className="w3-hide-large">&#128526; &#128522;</span><br/>
            LOGIER cukup kirimkan bukti pembayaran ke <strong>+62 821 3317 0120</strong> jangan lupa <strong>sertakan Nama Lengkap dan ID PEMBELIAN</strong>.
   			</p>
   		</div>
   		<div className="w3-col l3 w3-hide-small w3-hide-medium" ><p style={{fontSize: "25px"}}>&#128522;</p></div>  		
   	</div>
		</LayoutDefault>
	)
}