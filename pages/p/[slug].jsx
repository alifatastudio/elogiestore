import Link from "next/link"
import { useRouter } from "next/router"
import React from 'react'
import NumberFormat from "react-number-format"
import Axios from 'axios'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import LayoutDefault from "../../components/LayoutDefault"

export default function ProductView(){
   const router = useRouter()
   const { slug } = router.query
	const [product, setProduct] = React.useState({
		id: "", name: "", price: 1, brand: "", images: [], description: "", 
      material: "", size: [{id: 0, name: "", stock: 1, production: 1}]
	})
   const [imageShow, setImageShow] = React.useState(0)
   const [currentSize, setCurrentSize] = React.useState(0)   
   const [totalOrder, setTotalOrder] = React.useState(1)
   const [messageOrder, setMessageOrder] = React.useState({
      errorId: 0,
      message: ""
   }) 
   const waLink = `https://api.whatsapp.com/send?phone=6282133170120&text=Permisi%20ka%2C%20mau%20beli%20produk%20`+encodeURI(product.name + " " + product.id) 

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

	const onClickThubnail = value => () => {
		setImageShow(value)
	}

   const onClickSize = value => () => {
      if(messageOrder.errorId === 1){
         setMessageOrder({
            errorId: 0, message: ""
         })
      }
      setCurrentSize(value)
   }

   const onChangeTotalOrder = event => {
      const v = event.target.value
      const max = product.size[currentSize].stock
      setTotalOrder(prevState => {
         if(v < 0) return 1
         if(v > max) return max
         return v
      })
   }

   const addTotalOrder = () => {
      const max = product.size[currentSize].stock
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

   const onClickOrder = () => {
      const url = `/p/${product.slug}/order?sizeId=${currentSize}&totalOrder=${totalOrder}`

      if(currentSize === 0) {
         setMessageOrder({
            errorId: 1,
            message: "pilih ukuran terlebih dahulu"
         })
         return null
      } else if(totalOrder === 0){
         setMessageOrder({
            errorId: 2,
            message: "pilih jumlah order terlebih dahulu (minimal 1)"
         })
         return null
      } else {
         setMessageOrder({
            errorId: 0,
            message: ""
         })
         router.push(url)         
      }
   }

	return (
		<LayoutDefault title={product.name} >

   	<div className="w3-row">
   	  <div className="w3-col l6">
   			<div  className="w3-row">
               {/* Gambar Besar*/}
   				<div className="w3-col s12 m10 product-image-box">
   					{product.images.map((value, index) => (
   						<img 
   							src={value} 
   							style={{
                           width: "100%", 
                           boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)",
                           display: imageShow == index?"block":"none"
                        }} 
   							key={value} 
   						/>   					
   					))}
   				</div>

               {/* Gambar Thumbnail*/}
					<div className="w3-col s12 m2 product-image-box">
						<div className="row-padding">
							{product.images.map((value, index) => (
								<div 
                           className="w3-col s4 m12" 
                           style={{padding: "6px"}}
                           key={value} onClick={onClickThubnail(index)}
                        >
   								<img 
   									className="w3-hover-opacity" 
   									src={value} 
   									style={{
                                 width: "100%", 
                                 boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)",
                              }} 
   								/>
   							</div>
							))}
						</div>
					</div>
   					
   			</div>
   		</div>

   		<div className="w3-col l6">
            <div id="product-info-box">
               <h2 id="product-title">{product.name}</h2>
               <div>
                  <i style={{fontSize: "18px"}}>
                     <NumberFormat 
                        value={product.price} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'Rp '} 
                     />
                  </i>
                  <br/><br/>
                  <i className="fa fa-angle-double-right"></i> kode produk {product.id}
                  {product.brand.length < 1? "": 
                     <><br/><i className="fa fa-angle-double-right"></i> brand {product.brand}</>
                  }
                  {product.material.length < 1? "": 
                     <><br/><i className="fa fa-angle-double-right"></i> bahan {product.material}</>
                  }
                  <br/><i className="fa fa-angle-double-right"></i> tersedia {product.size[currentSize].stock}
                  <br/><br/>

                  {/* UKURAN */}
                  <i className="fa fa-angle-double-right"></i> ukuran<br/>
                  {product.size.map(value=> {
                     if(value.id === 0) return null
                     return <button 
                        className={`w3-button w3-border ${currentSize===value.id?"w3-theme":""}`} 
                        style={{marginTop: "5px", marginRight: "5px",}} 
                        key={value.id}
                        onClick={onClickSize(value.id)}>
                        {value.name}
                     </button>
                  })}
                  <br/><br/>

                  {/* Total Order*/}
                  <i className="fa fa-angle-double-right"></i> jumlah <em>(pilih ukuran terlebih dahulu)</em>
                  <br/>
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

                  {/* Button Action*/}
                  {messageOrder.errorId === 1?
                     <div style={{ marginBottom: "12px", color: "red", textAlign: "center"}}>
                        <em>{messageOrder.message}</em> &#129300;
                     </div>: null
                  }

                  {(messageOrder.errorId === 2) && (totalOrder < 1)?
                     <div style={{ marginBottom: "12px", color: "red", textAlign: "center"}}>
                        <em>{messageOrder.message}</em> &#129300;
                     </div>: null
                  }
                  <button
                     className="w3-button w3-theme" 
                     style={{ marginBottom: "12px", width: "100%"}}
                     onClick={onClickOrder}
                  >
                     Miliki Sekarang Juga&#128526;
                  </button>
                  <Link href={waLink}>            
                     <a 
                        target="_blank"
                        className="w3-button w3-border" 
                        style={{ width: "100%"}}>
                        <i className="fa fa-whatsapp"></i> WhatsApp Admin
                     </a>  
                  </Link>
               </div>
            </div>
   		</div>
   	</div>

   	<div className="w3-hide-small" style={{height: "25px"}} />
   	<div className="w3-hide-small" style={{height: "25px"}} />

   	<div className="w3-row-padding">
   		<div className="w3-col m2 l3">
            <p 
               className="w3-hide-medium w3-hide-large" 
               style={{fontSize: "25px", textAlign: "center"}}
            >
               &#128526; &#128522;
            </p>
            <p 
               className="w3-hide-small" 
               style={{fontSize: "25px", float: "right"}}
            >
               &#128526;
            </p>
         </div>
   		<div className="w3-col m8 l6" >
   			<p style={{textAlign: "center"}}>
               {product.description}
   			</p>
   		</div>
   		<div className="w3-col m2 l3 w3-hide-small">
            <p style={{fontSize: "25px"}}>&#128522;</p>
         </div>  		
   	</div>

      <style jsx>{`
         #product-title {
            text-align: center;
            margin-top: 25px;
         }
         .product-image-box {
            padding: 2px;
         }

         #product-info-box {
            padding:0px 12px;
         }

         @media (min-width:601px){ 
            .product-image-box {
               padding:0.01em 8px;
            }  
         }

         @media (min-width:993px){ 
            #product-title {
               text-align: left;
               margin-top: 2px;
            }  
         }
      `}</style>
		</LayoutDefault>
	)
}