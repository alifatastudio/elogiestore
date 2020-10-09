import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Axios from 'axios'
import NumberFormat from "react-number-format"
import LayoutStore from "../../components/LayoutStore"
import { fakeproduct } from "../../components/faker"

export default function Product(){
 const router = useRouter()
 const { slug } = router.query
 const [product, setProduct] = React.useState({...fakeproduct})
 const [imageShow, setImageShow] = React.useState(0)
 const [currentVariant, setCurrentVariant] = React.useState(0)
 const [totalOrder, setTotalOrder] = React.useState(1)
 const [message, setMessage] = React.useState({type: "", message: ""})
 const waLink = `https://api.whatsapp.com/send?phone=6282133170120&text=Permisi%20ka%2C%20mau%20beli%20produk%20`+encodeURI(product.name + " " + product.id + " " + product.variants.name + " " + product.variants.variant[currentVariant].name + " jumlah " + totalOrder) 

 React.useEffect(() => {
  function getData(){
    if(typeof slug !== 'string') return ""
    Axios.get("/api/product/"+slug).then(res => {
      setProduct(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  
  getData()
 }, [slug])

 const prevImageShow = () => {
 	const max = product.images.length -1
  setImageShow(prevState => {
   if(prevState === 0) return max
    return prevState-1
  })
 }

 const nextImageShow = () => {
 	const max = product.images.length -1
  setImageShow(prevState => {
   if(prevState === max) return 0
   	return prevState+1
  })
 }

 const onClickThubnail = idImageShow => () => {
		setImageShow(idImageShow)
	}

	const onClickVariant = (variantId, imageShowId) => () => {
		setCurrentVariant(variantId)
		setImageShow(prevState => {
			if(imageShowId === null) return prevState
			return imageShowId
		})
	}

	const addTotalOrder = () => {
  const max = product.variants.variant[currentVariant].stock
  setTotalOrder(prevState => {
   if(prevState >= max) return max
   return prevState+1
  })
	} 

	const reduceTotalOrder = () => {
  setTotalOrder(prevState => {
   if(prevState < 1) return 1
   return prevState-1
  })
	}

	const onChangeTotalOrder = event => {
  const v = event.target.value
  const max = product.variants.variant[currentVariant].stock
  setTotalOrder(prevState => {
   if(v < 0) return 1
   if(v > max) return max
   return v
  })
 }

 const onClickOrder = () => {
  const url = `/order/${product.id}?variantId=${currentVariant}&totalOrder=${totalOrder}`
  if(currentVariant === 0){
  	setMessage({type: "error", message: "pilih variasi dulu yaa"})
  	return null
  } else if(totalOrder === 0){
  	setMessage({type: "error", message: "order minimal 1 yaa ka : )"})
  	return null
  } else {
  	setMessage({type: "success", message: "OK, kaka akan diarahkan ke halaman order selanjutnya"})
  	router.push(url)

  	return null
  }
 }

	return <LayoutStore title={product.name} pageTitle={product.category} type="CHILDREN">
		<div className="w3-row">
			{/* IMAGES */}
			<div className="w3-col m6">
				<div className="w3-display-container">
					{product.images.map(value => (
							<img 
								width="100%"
								key={value.id}
								src={product.images[imageShow].url} 
								style={{display: imageShow === value.id?"block":"none"}} 
							/>
					))}
					<button 
						className="w3-button w3-theme w3-display-left" 
						onClick={prevImageShow}
					>
						&#10094;
					</button>
     <button 
     	className="w3-button w3-theme w3-display-right" 
     	onClick={nextImageShow}>
     	&#10095;
     </button>
				</div>

				<div style={{height: "15px"}} />
				<div className="row-padding">
					{product.images.map(value => (
						<div 
       key={value.id}
       className="w3-col s4 m3" 
       style={{padding: "6px"}}
       onClick={onClickThubnail(value.id)}
    		>
							<img 
								width="100%"
								className="w3-hover-opacity w3-card" 
								src={value.url}
							/>
      </div>
   		))}
   	</div>
			</div>

			{/* TITLE, DESCRIPTION DLL */}
			<div className="w3-col m6">
				<div className="w3-container">
					<h1>{product.name}</h1>
					<p>
						<i style={{fontSize: "18px"}}>
       <NumberFormat 
        value={product.price} 
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'Rp '} 
       />
			   </i>
			   <br/>
			   <i className="fa fa-angle-double-right"></i> kode produk {product.id}
			     {product.brand.length > 0 ? <><br/><i className="fa fa-angle-double-right"></i> brand {product.brand}</>:null}
          {product.color.length > 0 ? <><br/><i className="fa fa-angle-double-right"></i> warna {product.color}</>: null}
		      {product.material.length > 0 ? <><br/><i className="fa fa-angle-double-right"></i> bahan {product.material}</>: null}
		      <br/><i className="fa fa-angle-double-right"></i> {product.variants.variant[currentVariant].stock > 0 ? "tersedia " + product.variants.variant[currentVariant].stock: <i style={{color: "red"}}>Sedang Tidak Tersedia, Sudah Terjual Habis</i>}
					</p>

					<p><i className="fa fa-angle-double-right"></i> variasi {product.variants.name}</p>
					{product.variants.variant.map(value => {
						if(value.id === 0) return null
						return <span 
							key={value.id}
       className={`w3-tag w3-card w3-hover-opacity ${currentVariant===value.id?"w3-theme":"w3-theme-white"}`}
       style={{marginRight: "10px", marginBottom: "10px", cursor: "pointer"}}
       onClick={onClickVariant(value.id, value.imageId)}
      >
      	{value.name}
      </span>
					})}

					<p><i className="fa fa-angle-double-right"></i> jumlah <i>(pilih variasi terlebih dahulu)</i></p>
					<button 
      className="w3-button w3-border" 
      style={{marginRight: "5px"}} 
      onClick={reduceTotalOrder}
		   >
      -
     </button>
     <input 
      className="w3-button w3-border" 
      type="number" 
      value={totalOrder}
      onChange={onChangeTotalOrder}
      style={{marginRight: "5px", width: "95px"}}
     />                
     <button 
      className="w3-button w3-border" 
      style={{marginRight: "5px"}}
      onClick={addTotalOrder}
     >
      +
     </button> 

     <br/><br/>
     {message.message.length > 0 ? 
     	<React.Fragment>
     		<div style={{textAlign: "center"}}>
     			{message.type === "error"?
     				<i style={{color: "red"}}>{message.message}</i>: null
     			}
     			{message.type === "succes"?
     				<i style={{color: "green"}}>{message.message}</i>: null
     			}
     		</div>
     		<br/>
     	</React.Fragment>: null
     }
     <button
      className="w3-button w3-theme" 
      style={{ marginBottom: "10px", width: "100%"}}
      onClick={onClickOrder}
     >
      Miliki Sekarang Juga &#128526;
     </button>
     <Link href={waLink}>            
      <a 
       target="_blank"
       className="w3-button w3-green" 
       style={{ width: "100%"}}>
        <i className="fa fa-whatsapp"></i> WhatsApp Admin
      </a>  
     </Link>
     <p style={{marginTop: "5px"}}>
						<small><em>*Pesan langsung melalui WhatsApp (+62 821 3317 0120)</em></small>
					</p>
     <br/>
     <p style={{whiteSpace: "pre"}}>&#128526; &#128522; {product.description}</p>
				</div>
			</div>

		</div>
	</LayoutStore>
}