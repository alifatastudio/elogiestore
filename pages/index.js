import React from 'react'
import LayoutStore from "../components/LayoutStore"

export default function Home() {
  return (
  	<LayoutStore title="Created for Your Satisfaction" pageTitle="Hello &#128522;" type="CHILDREN">
  		<p style={{textAlign: "center"}}>
  			Selamat datang di ELOGIE, silakan pilih menu yang tersedia.
  			<br/>
  			Jangan ragu untuk menghubungi kami &#128522; 
  		</p>
  	</LayoutStore>
  )
}
