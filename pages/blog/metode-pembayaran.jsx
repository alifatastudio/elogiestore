import React from 'react'
import LayoutDefault from "../../components/LayoutDefault"

export default function MetodePembayaran(){

   const rekeningAtm = [
      {
         id: 1, 
         name: "Fikri Ali Fata",
         bank: "BTPN",
         bankCode: "213",
         rekeningNumber: "90015178257",
         mediaurl: `https://picsum.photos/1080`
      },
      {
         id: 2, 
         name: "Fikri Ali Fata",
         bank: "Mandiri Syariah",
         bankCode: "451",
         rekeningNumber: `7117885873`,
         mediaurl: `https://picsum.photos/1081`
      }
   ]

	return (
		<LayoutDefault title="Konfirmasi Pembayaran">
			<div className="w3-row">
   		<div className="w3-col l3 w3-hide-small w3-hide-medium" ><p style={{fontSize: "25px", float: "right"}}>&#128526;</p></div>
   		<div className="w3-col l6">
            <h1 style={{textAlign: "center"}}>Apa Saja Metode Pembayaran yang Tersedia?</h1>
   			<p style={{textAlign: "center"}}>
               Berikut metode pembayaran yang tersedia, Jangan lupa untuk konfirmasi pembayaran. Kami akan terus meningkatkannya demi kemudahan transaksi LOGIER di ELOGIE &#128522;
   			</p>
            <ul className="w3-ul">
               <li>
                  <i className="fa fa-angle-double-right"></i> <strong>REKENING ATM</strong><br/><br/>
                  <ul className="w3-ul">
                     {rekeningAtm.map(value => (
                        <li key={value.id}>
                           <div className="w3-row-padding w3-card-4">
                              <div className="w3-col s4">
                                 <img src="https://picsum.photos/1080" alt={value.bank} style={{width:"100%"}} />
                              </div>
                              <div className="w3-col s8">   
                                 <p>
                                    Nama <i className="fa fa-angle-double-right"></i> {value.name}<br/>
                                    Bank <i className="fa fa-angle-double-right"></i> {value.bank}<br/>
                                    Kode Bank <i className="fa fa-angle-double-right"></i> {value.bankCode}<br/>
                                    No. Rekening <i className="fa fa-angle-double-right"></i> {value.rekeningNumber}<br/>
                                 </p>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </li>
            </ul>



   		</div>
   		<div className="w3-col l3 w3-hide-small w3-hide-medium" ><p style={{fontSize: "25px"}}>&#128522;</p></div>  		
   	</div>
		</LayoutDefault>
	)
}