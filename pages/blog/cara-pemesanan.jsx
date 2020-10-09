import React from 'react'
import LayoutStore from "../../components/LayoutStore"

export default function Index(){
  return <LayoutStore />
}

function CaraPemesanan(){
	return (
	  <LayoutStore title="Cara Pemesanan">
	   <div className="w3-row">
   	  <div className="w3-col l3 w3-hide-small w3-hide-medium"><p style={{fontSize: "25px", float: "right"}}>&#128526;</p></div>
      	<div className="w3-col l6">
          <h1 style={{textAlign: "center"}}>Bagaimana Cara Pemesanan?</h1>
         	<p style={{textAlign: "center"}}>
            <span className="w3-hide-large">&#128526; &#128522;</span>
         	</p>
            <ul className="w3-ul">
             <li>
               <i className="fa fa-angle-double-right"></i> <strong>Format Order</strong><br/><br/>
               <i className="fa fa-angle-right"></i> Kode Produk :<br/>
               <i className="fa fa-angle-right"></i> Size :<br/>
               <i className="fa fa-angle-right"></i> Jumlah :<br/><br/>

               <i className="fa fa-angle-right"></i> Nama Lengkap :<br/>
               <i className="fa fa-angle-right"></i> No Hp :<br/>
               <i className="fa fa-angle-right"></i> Alamat Lengkap :<br/>
               <i className="fa fa-angle-right"></i> Kode Pos :<br/>
               <i className="fa fa-angle-right"></i> Catatan (opsional) :<br/>

              </li>
              <li>
               <i className="fa fa-angle-double-right"></i> Pemesanan dilakukan melalui WhatsApp Admin <strong>+62 821 3317 0120</strong> dengan format order diatas. 
              </li>
              <li>
               <i className="fa fa-angle-double-right"></i> Untuk pemesanan melalui web, cukup pilih tombol <strong><em>miliki sekarang</em></strong> pada produk,
               ikuti langkahnya dan LOGIER akan diarahkan ke WhatsApp Admin dengan data format order yang telah diisi. 
              </li>
              <li>
               <i className="fa fa-angle-double-right"></i> Metode pemesanan lain akan kami kembangkan untuk mempermudah LOGIER bertransakasi di Elogie &#128522;
              </li>
            </ul>
      	</div>
   	  <div className="w3-col l3 w3-hide-small w3-hide-medium"><p style={{fontSize: "25px"}}>&#128522;</p></div>  		
	   </div>
	  </LayoutStore>
	)
}