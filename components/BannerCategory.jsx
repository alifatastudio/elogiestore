export default function BannerCategory(){
	return (
		<div className="w3-display-container w3-container">
   {/* <img src="/w3images/jeans.jpg" alt="Jeans" style={{width:"100%"}} /> */}
   <div className="w3-theme-l5" style={{height: "350px", width: "100%"}} />
   <div className="w3-display-topleft w3-text-white" style={{padding:"24px 48px"}}>
     <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
     <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
     <h1 className="w3-hide-small">COLLECTION 2016</h1>
     <p><a href="#jeans" className="w3-button w3-theme w3-padding-large w3-large">SHOP NOW</a></p>
   </div>
  </div>
	)
}