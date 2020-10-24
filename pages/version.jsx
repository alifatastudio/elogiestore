import React from 'react'
import Link from "next/link"

export default function Version(){
	const versionData = [
		{
			title: "v1.0.3 Rencana (ongoing)",
			todolist: [
				"Tambahkan fitur DILIHAT BERSAMA"
			]
		},
		{
			title: "v1.0.2 Upgrade Tampilan",
			todolist: [
				"Tambahkan fitur BLOG FINANCE awalan",
				"Tambahkan fitur BLOG FASHION awalan",
				"Tambahkan fitur CRUD PRODUCT",
				"Tambahkan & rapihkan deskripsi, stock, price produk",
				"Tambahkan BANNER CATEGORY, FURNITURE",
				"Tambahkan fitur STATUS (sold out, diskon, new )",
				"Tambahkan Google Analys"
			]
		},
		{
			title: "v1.0.1 Perbaiki Tampilan",
			todolist: [
				"Tampilan menggunakan w3css lebih sederhana dan terstruktur"
			]
		},
		{
			title: "v1.0.0 Awalan",
			todolist: [
				"tahap awal fokus sebagai fungsi untuk katalog"
			]
		}
	]

	return (
		<div className="w3-container">
			<Link href="/">
				<button className="w3-button w3-theme" style={{width: "100%"}}>
					Home
				</button>
			</Link>
			<h1>Versi Aplikasi Terbaru</h1>

			{versionData.map(value => (
				<React.Fragment key={value.title}>
					<div>
						<strong>{value.title}</strong>
						<ul>
							{value.todolist.map(x => (
								<li key={x}>{x}</li>
							))}
						</ul>
					</div>
					<hr/>
				</React.Fragment>
			))}
  </div>
	)
}