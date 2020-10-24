import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Axios from 'axios'
import NumberFormat from "react-number-format"
import LayoutStore from "../../components/LayoutStore"
import Loader from "../../components/Loader"
import * as Faker from '../../library/Faker'

export default function Order(){
	const router = useRouter()
 const { code, variantId, totalOrder } = router.query
 const [product, setProduct] = React.useState({...Faker.fakeproduct})
 const [dataOrder, setDataOrder] = React.useState({...Faker.fakeorder})
 const [loader, setLoader] = React.useState({...Faker.fakeloader}) 
 
 const GETVARIANTNAME = () => {
 	if(product.variants.variant[variantId] === undefined) return ""
 		if(product.variants.variant[variantId].name === undefined) return ""
 			return product.variants.variant[variantId].name
 }

 const waLink = `https://api.whatsapp.com/send?phone=6282133170120&text=Permisi%20ka%2C%20mau%20beli%20produk%20`+encodeURI(product.name + " " + product.id + " " + product.variants.name + " " + GETVARIANTNAME() + " jumlah " + totalOrder) 
 const inputs = [
 	{name: "name", title: "Nama Lengkap", placeholder: "nama lengkap Anda...", value: dataOrder.name},
 	{name: "phone", title: "No. Handphone", placeholder: "08213317xxxx", value: dataOrder.phone},
 	{name: "country", title: "Negara", placeholder: "Indonesia...", value: dataOrder.city},
 	{name: "province", title: "Provinsi", placeholder: "Jawa Tengah...", value: dataOrder.province},
 	{name: "city", title: "Kota/Kabupaten", placeholder: "Semarang...", value: dataOrder.city},
 	{name: "subdistrict", title: "Kecamatan/Kelurahan", placeholder: "Banyumanik...", value: dataOrder.subdistrict},
 	{name: "zipcode", title: "Kode Pos", placeholder: "501xx", value: dataOrder.zipcode},
 	{name: "address", title: "Alamat Lengkap", placeholder: "jalan Mawar RT/RW ...", value: dataOrder.address},
 	{name: "note", title: "Catatan (opsional)", placeholder: "", value: dataOrder.note},
 ]

 React.useEffect(() => {
  async function POPULATEFIRSTDATA(){
    try{
    	if(typeof code !== 'string') return ""
    	if(code === undefined) return ""
    	
    	const x = await Axios.get("/api/order/"+code)
    	setProduct(x.data)
    	setLoader({
	     ...Faker.fakeloader,
	     isLoadingTheProduct: false,
	    })
    }
    catch(error){
    	setLoader(prevState => {
	     const x = error.response.data
	     const y = "Kesalahal terjadi !! Coba ulangi beberapa saat lagi atau jangan ragu untuk segera hubungi kami : )"
	     const z = {
	      ...prevState,
	      isLoadingTheProduct: false,
	      isError: true,
	     }
	     if(x === undefined) return {...z, errorMessage: y}
	     return {...z, errorMessage: x}
	    })
    	console.log(error)
    }
  }
  
  POPULATEFIRSTDATA()
 }, [code, variantId, totalOrder])

 const onChangeDataOrder = event => {
 	setDataOrder({...dataOrder, [event.target.name]: event.target.value})
 }

 const onClickNextStep = () => {
 	const d = new Date()
 	const shopid = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()
 	const msg = encodeURI(`Order ${product.name} | ${shopid} \n\nKode Produk ${product.id} \n${product.variants.name} ${GETVARIANTNAME()} \nJumlah ${totalOrder} \nTotal Rp ${product.price*totalOrder} \nBiaya Pengiriman (diisi admin) \n\nNama Lengkap ${dataOrder.name} \nNo Hp ${dataOrder.phone} \n\nAlamat Lengkap ${dataOrder.address} \n\n${dataOrder.country} ${dataOrder.province} ${dataOrder.city} ${dataOrder.subdistrict} \nKode Pos ${dataOrder.zipcode} \n\nCatatan ${dataOrder.note}`)

		const WaLink = `https://api.whatsapp.com/send?phone=6282133170120&text=${msg}`;
		router.push(WaLink)
 }

	return (
		<LayoutStore title={"Order " + product.name} pageTitle="Order">
			{loader.isError? 
    <p style={{textAlign: "center" }}>{loader.errorMessage}</p>
   :null}

   {loader.isLoadingTheProduct ? <Loader />: 
    !loader.isError ?
					<div className="w3-row w3-animate-fading-x">
						<div className="w3-col m6" style={{padding: "10px"}} >
							<p style={{textAlign: "center"}}><strong>Informasi Pembeli</strong></p>
							{inputs.map(value => (
								<div className="w3-padding-16" key={value.name}>
									<label htmlFor={value.name}>{value.title}</label>
										<input 
											className="w3-input" 
											type={value.name === "phone"?"number":"text"} 
											id={value.name}
											name={value.name}
											placeholder={value.placeholder}
											value={value.value}
											onChange={onChangeDataOrder}
											disabled={value.name === "country"? true: false}
										/>
								</div>
							))}
						</div>
						<div className="w3-col m6">
							<div className="w3-row-padding">
								<div className="w3-col m6 l4">
		       <img 
		       	src={product.images[0].url} 
		       	alt={product.name} 
		       	style={{width:"100%"}} 
		       />
		       <Link href="/product/[slug]" as={"/product/"+product.slug}>
		       	<a className="w3-button w3-small w3-theme-l5" style={{width: "100%", marginTop: "10px"}}>
		       		lihat produk
		       	</a>
		       </Link>
								</div>
								<div className="w3-col m6 l8">
									<h3>{product.name}</h3>
									{product.status !== null?
		        product.status.length > 0 ?
		        <span 
		         className={`w3-tag ${product.status.toLowerCase() === "sold out"?"w3-theme":"w3-red"}`}
		        >{product.status}</span>
		        :null
		        :null
		       }
									<p>
										<i style={{fontSize: "18px"}}>
				      {parseFloat(product.discount) > 0 ?
	          <b><i><del>
	           <NumberFormat 
	            value={product.price} 
	            displayType={'text'} 
	            thousandSeparator={true} 
	            prefix={'Rp '} 
	           /></del></i>
	           <NumberFormat 
	            value={((100-parseFloat(product.discount))/100) * parseFloat(product.price)} 
	            displayType={'text'} 
	            thousandSeparator={true} 
	            prefix={'  Rp '} 
	            decimalScale={0}
	           />
	          </b>:
	          <b>
	           <NumberFormat 
	            value={product.price} 
	            displayType={'text'} 
	            thousandSeparator={true} 
	            prefix={'Rp '} 
	           />
	          </b>
	         }
							   </i>
						    {product.variants.variant[variantId] === undefined ? null:
		        	<><br/><i className="fa fa-angle-double-right"></i> {product.variants.name} {product.variants.variant[variantId].name}</>
		        }
							   <br/><i className="fa fa-angle-double-right"></i> jumlah {totalOrder !== undefined ? totalOrder: ""}
										<br/><br/>
		        
		        <i style={{fontSize: "19px"}}>
		        	Total <strong>
		        	{parseFloat(product.discount) > 0 ?
		          <b><i>
		           <NumberFormat 
		            value={(((100-parseFloat(product.discount))/100) * parseFloat(product.price)) * totalOrder} 
		            displayType={'text'} 
		            thousandSeparator={true} 
		            prefix={'  Rp '} 
		            decimalScale={0}
		           /></i>
		          </b>:
		          <b>
		           <NumberFormat 
		            value={product.price*totalOrder} 
		            displayType={'text'} 
		            thousandSeparator={true} 
		            prefix={'Rp '} 
		           />
		          </b>
		         }
		        	</strong>
		        </i>
		        
		        <br/><i>( + biaya pengiriman )</i>
									</p>

								</div>
							</div>

							<div className="w3-container">
								<button className="w3-btn w3-theme" style={{width: "100%"}} onClick={onClickNextStep}>
									Lanjutkan
								</button>
								<p style={{marginTop: "5px"}}>
									<small><em>*Lanjutkan untuk dengan data yang telah diisi (+62 821 3317 0120)</em></small>
								</p>
								<Link href={waLink}>            
			      <a 
			       target="_blank"
			       className="w3-button w3-green" 
			       style={{ width: "100%"}}>
			        <i className="fa fa-whatsapp"></i> WhatsApp Admin
			      </a>  
			     </Link>
								<p style={{marginTop: "5px"}}>
									<small><em>*Pesan langsung melalui WhatsApp  (+62 821 3317 0120)</em></small>
								</p>
							</div>

						</div>
					</div>
				:null
			}
		</LayoutStore>
	)
}