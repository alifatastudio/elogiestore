import React from 'react'
import Link from "next/link"
import LayoutStore from "../../components/LayoutStore"

export default function KonfirmasiPembayaran(){
 const waLink = `https://api.whatsapp.com/send?phone=6282133170120&text=Permisi%20ka%2C%20saya%20mau%20konfirmasi%20pembayaran`
 
 return (
  <LayoutStore title="Konfirmasi Pembayaran" type="CHILDREN">
   <h1 style={{textAlign: "center"}}>Bagaimana Cara Konfirmasi Pembayaran?</h1>
   <p style={{textAlign: "center"}}>
    <span className="w3-hide-large">&#128526; &#128522;</span><br/>
    LOGIER cukup kirimkan bukti pembayaran ke <strong>+62 821 3317 0120</strong> jangan lupa <strong>sertakan Nama Lengkap dan ID PEMBELIAN</strong>.
    <br/>
    <Link href={waLink}>            
     <a 
      target="_blank"
      className="w3-button w3-green" 
     >
       <i className="fa fa-whatsapp"></i> WhatsApp Admin
     </a>  
    </Link>
   </p>
  </LayoutStore>
 )
}