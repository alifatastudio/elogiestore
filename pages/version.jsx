import React from 'react'
import Link from "next/link"

export default function Version(){
	return (
		<div className="w3-container">
			<Link href="/">
				<button className="w3-button w3-theme" style={{width: "100%"}}>
					Home
				</button>
			</Link>
			<h1>Versi Aplikasi Terbaru</h1>

			<div>
				<strong>v1.0.1 Perbaiki Tampilan</strong>
				<ul>
					<li>Tambahkan & rapihkan deskripsi produk</li>
					<li>Tambahkan BANNER CATEGORY</li>
					<li>Tambahkan fitur STATUS (sold out, diskon, new )</li>
					<li>Perbaiki fitur STOCK</li>
					<li>Perbaiki fitur PRICE</li>
					<li>Tambahkan fitur DILIHAT BERSAMA</li>
					<li>Tambahkan fitur BLOG FINANCE</li>
					<li>Tambahkan fitur BLOG FASHION</li>
				</ul>
			</div>
			<hr/>

			<p>
			<strong>v1.0.1 Perbaiki Tampilan</strong>
			<br/>
			Tampilan menggunakan w3css lebih sederhana dan terstruktur
			<br/>
			<strong>v1.0.0 Awalan</strong>
			<br/>
			tahap awal fokus sebagai fungsi untuk katalog
			</p>
  </div>
	)
}