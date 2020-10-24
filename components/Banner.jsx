import React from "react"

export default function BannerCategory(){
 const [showBanner, setShowBanner] = React.useState(0)

 const banner = [
  "/BANNER/FASHIONPRIA.jpg",
  "/BANNER/FASHIONWANITA.jpg",
  "/BANNER/FURNITURE.jpg"
 ]

 React.useEffect(() => {
  const x = setInterval(() => {
   setShowBanner(prevState => {
    const max = banner.length - 1
    if(prevState === max) return 0
    return prevState + 1
   })
  }, 7000)

  return () => clearInterval(x)
 })

	return (
  <div className="w3-container">
   {banner.map((value, index) => (
    <img
     key={value}
     className="w3-animate-fading w3-round-large w3-card"
     src={value} 
     alt="Banner" 
     style={{
      width:"100%",
      display: showBanner === index ?"block":"none"}} 
    />
   ))}
  </div>
	)
}