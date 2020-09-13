import React from 'react';
import Link from "next/link"

export default function Footer(){
	const d = new Date()

	const usefulurls = [
		{
			id: 1,
			name: "Halaman Utama",
			url: "/"
		},
		{
			id: 2,
			name: "Cara Pemesanan",
			url: "/blog/cara-pemesanan"
		},
		{
			id: 3,
			name: "Metode Pembayaran",
			url: "/blog/metode-pembayaran"
		},
		{
			id: 4,
			name: "Konfirmasi Pembayaran",
			url: "/blog/konfirmasi-pembayaran"
		},
		{
			id: 5,
			name: "Cek Resi Pengiriman",
			url: "/blog/cek-resi-pengiriman"
		}
	]

	const socialmedia = [
		{
			id: 1,
			name: "@elogiemale",
			icon: "fa fa-instagram",
			url: `https://instagram.com/elogiemale`
		},
		{
			id: 2,
			name: "@elogiefemale",
			icon: "fa fa-instagram",
			url: `https://instagram.com/elogiefemale`
		},
		{
			id: 3,
			name: "@elogiefurniture",
			icon: "fa fa-instagram",
			url: `https://instagram.com/elogiefurniture`
		},
		{
			id: 4,
			name: "+62 821 3317 0120",
			icon: "fa fa-whatsapp",
			url: `https://api.whatsapp.com/send?phone=6282133170120&text=Halo%20admin%20Elogie`
		},
		{
			id: 5,
			name: "hello.elogie@gmail.com",
			icon: "fa fa-envelope",
			url: `/#contactbox`
		},
		{
			id: 6,
			name: "elogiestore.com",
			icon: "fa fa-globe",
			url: `/`
		}
	]

	return (
  <React.Fragment>
  <div style={{height: "25px"}} />

  <div className="w3-theme">
   <div style={{height: "25px"}} />

			<div className="w3-container">
				<div className="w3-row">
					<div className="w3-col l6">
						<div>
							<h4>Link Bermanfaat</h4>
							<p>Berikut link bermanfaat untuk mempermudah LOGIER &#128526;</p>
							{usefulurls.map(value => (
								<div key={value.id}>
									<a href="#" className="w3-button"><i className="fa fa-angle-double-right"></i></a>
			  				<Link href={value.url}>
			  					<a className="w3-button">{value.name}</a>
			  				</Link>
								</div>
							))}
							
						</div>
					</div>
					
					<div className="w3-col l6">
						<div id="contactbox">
							<h4>Kontak Sosial Media</h4>
							<p>Ikuti sosial media kami dan dapatkan info menarik, tips, trik, diskon, promo, dan info seru lainnya. Hubungi kami jika kapanpun LOGIER ingin di jam kerja kami. &#128522;
							</p>
						</div>
						{socialmedia.map(value => (
								<div key={value.id}>
									<a href="#contactbox" className="w3-button"><i className={value.icon}></i></a>
			  				<a href={value.url} className="w3-button" target="_blank">{value.name}</a>
								</div>
							))}

					</div>
				</div>
			</div>

   <div style={{height: "25px"}} />

			<div style={{height: "45px"}} >
				<div style={{position: "relative", textAlign: "center"}} >
	    <span className="w3-button">
	    	&copy; Copyright {d.getFullYear()} elogie
	    </span>
	   </div>
	  </div>

   <div style={{height: "25px"}} />

  </div>
  </React.Fragment>
	)
}