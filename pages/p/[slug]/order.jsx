import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Axios from 'axios'
import NumberFormat from "react-number-format"
import LayoutOrder from "../../../components/LayoutOrder"

export default function Order(){
	const router = useRouter()
 const { slug, sizeId, totalOrder } = router.query
	const [product, setProduct] = React.useState({
			id: "", name: "", price: 1, brand: "", images: [], description: "", 
	      material: "", size: [{id: 0, name: "", stock: 1, production: 1}]
	})
	const [dataOrder, setDataOrder] = React.useState({
		name: "", 
		phone: "", country: "Indonesia", 
		province: "", city: "", subdistrict: "",
		zipcode: "", address: "", note: ""
	})
	

	React.useEffect(() => {
  function getData(){
    if(typeof slug !== 'string') return ""
    Axios.get("/api/p/"+slug).then(res => {
      setProduct(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  
  getData()
 }, [slug])


 const onChangeDataOrder = event => {
 	setDataOrder({...dataOrder, [event.target.name]: event.target.value})
 }

 const onClickNextStep = () => {
 	const d = new Date()
 	const shopid = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()
 	const msg = encodeURI(`Order ${product.name} | ${shopid} \n\nKode Produk ${product.id} \nSize ${product.size[sizeId].name} \nJumlah ${totalOrder} \nTotal Rp ${product.price*totalOrder} \nBiaya Pengiriman (diisi admin) \n\nNama Lengkap ${dataOrder.name} \nNo Hp ${dataOrder.phone} \n\nAlamat Lengkap ${dataOrder.address} \n\n${dataOrder.country} ${dataOrder.province} ${dataOrder.city} ${dataOrder.subdistrict} \nKode Pos ${dataOrder.zipcode} \n\nCatatan ${dataOrder.note}`)

		const WaLink = `https://api.whatsapp.com/send?phone=6282133170120&text=${msg}`;

		router.push(WaLink)
 }

	return (
		<LayoutOrder title={`Order ${product.name}`}>

			<div className="w3-row-padding">
				<div className="w3-col l6">
				<h1 style={{fontSize: "21px", fontWeight: "600"}}>ORDER ELOGIE</h1>
					<h3><i>Alamat Pengiriman</i></h3>
					
					<div className="w3-row-padding">
						<div className="w3-half form">
							<label htmlFor="name">Nama Lengkap *</label>
							<input 
								className="w3-input" 
								type="text" 
								id="name"
								name="name"
								placeholder="nama lengkap Anda..."
								value={dataOrder.name}
								onChange={onChangeDataOrder}
							/>
						</div>
						<div className="w3-half form" >
							<label htmlFor="phone">Nomer Handphone *</label>
							<input 
								className="w3-input" 
								type="number"
								id="phone"
								name="phone"
								placeholder="nomer ponsel aktif Anda 08xx..."
								value={dataOrder.phone}
								onChange={onChangeDataOrder}
							/>
						</div>

						<div style={{height: "25px"}} />

						<div className="w3-half form">
							<label htmlFor="country">Negara *</label>
							<input 
								className="w3-input" 
								type="text" 
								id="country"
								name="country"
								placeholder="Indonesia..."
								value={dataOrder.country}
								onChange={onChangeDataOrder}
								disabled
							/>
						</div>
						<div className="w3-half form" >
							<label htmlFor="province">Provinsi *</label>
							<input 
								className="w3-input" 
								type="text"
								id="province"
								name="province"
								placeholder="Provinsi Anda..."
								value={dataOrder.province}
								onChange={onChangeDataOrder} 
							/>
						</div>
						<div className="w3-half form" >
							<label htmlFor="city">Kota/Kabupaten *</label>
							<input 
								className="w3-input" 
								type="text" 
								id="city"
								name="city"
								placeholder="Kota/Kabupaten Anda..."
								value={dataOrder.city}
								onChange={onChangeDataOrder} 
							/>
						</div>
						<div className="w3-half form" >
							<label htmlFor="subdistrict">Kecamatan *</label>
							<input 
								className="w3-input" 
								type="text" 
								id="subdistrict"
								name="subdistrict"
								placeholder="Kecamatan..."
								value={dataOrder.subdistrict}
								onChange={onChangeDataOrder}
							/>
						</div>
						<div className="w3-quarter form" >
							<label htmlFor="zipcode">Kode Pos *</label>
							<input
							 className="w3-input" 
							 type="number" 
							 id="zipcode"
								name="zipcode"
								placeholder="Kode Pos..."
								value={dataOrder.zipcode}
								onChange={onChangeDataOrder}
							/>
						</div>
						<div className="w3-threequarter form" >
							<label htmlFor="address">Alamat Lengkap *</label>
							<textarea 
								className="w3-input" 
								type="text" 
								rows="2"
								id="address"
								name="address"
								placeholder="jl. Rt/Rw Desa dll..."
								value={dataOrder.address}
								onChange={onChangeDataOrder}
							></textarea>
						</div>
						<div style={{height: "25px"}} />
						<div className="form" style={{padding: "10px 0px 5px 0px"}}>
							<label htmlFor="note">Catatan <i>(opsional)</i></label>
							<textarea 
								className="w3-input" 
								type="text" 
								rows="2"
								id="note"
								name="note"
								placeholder="opsional..."
								value={dataOrder.note}
								onChange={onChangeDataOrder}
							></textarea>
						</div>
						
					</div>

				</div>

			{/* INFORMASI PRODUCT*/}
				<div className="w3-col l6">
					<div style={{height: "25px"}} />
					<div className="w3-card-4">
						<div className="w3-row">
        <div className="w3-col s12 m6 l4">
          <img src={product.images[0]} alt={product.name} style={{width:"100%"}} />
        </div>
        <div className="w3-col s12 m6 l8" style={{padding: "12px"}}>
        	<Link href="/p/[slug]" as={`/p/${product.slug}`}>
        		<a target="_blank" id="link-product">
	        		<i><h3>{product.name}</h3></i>
        		</a>
        	</Link>
         <i className="fa fa-angle-double-right"></i> kode produk {product.id}
         {product.size[sizeId] === undefined?null:
         	<><br/><i className="fa fa-angle-double-right"></i> ukuran {product.size[sizeId].name}</>
         }
         <br/><i className="fa fa-angle-double-right"></i> jumlah {totalOrder}
         
         <br/><br/>
         <i style={{fontSize: "19px"}}>
         	Total <NumberFormat 
            value={product.price*totalOrder} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'Rp '} 
         /></i>
         <br/><i>(+ ongkos kirim)</i>
	       </div>
      </div>
					</div>
					<div style={{height: "25px"}} />
					<div>
						<button className="w3-btn w3-theme" style={{width: "100%"}} onClick={onClickNextStep}>
							Lanjutkan
						</button>
						<div className="" style={{marginTop: "15px",textAlign: "center", fontSize: "15px"}}>
							<em>*proses selanjutnya LOGIER akan diarahkan ke WhatsApp Admin +62 821 3317 0120</em>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
					#link-product {
						text-decoration: none;
					}
					#link-product:hover {
						text-decoration: underline;
					}

					.form {
						margin-top: 25px;
					}
			`}</style>
		</LayoutOrder>
	)
}