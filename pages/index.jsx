import React from 'react'
import Banner from "../components/Banner"
import LayoutStore from "../components/LayoutStore"

export default function Home() {
  return (
  	<LayoutStore title="Satisfaction Solution" pageTitle="Hello &#128522;" type="CHILDREN">
  		<Banner />

  		<p style={{textAlign: "center"}}>
  			Selamat datang di ELOGIE, silakan pilih menu yang tersedia.
  			<br/>
  			Jangan ragu untuk menghubungi kami &#128522; 
  		</p>
  	</LayoutStore>
  )
}
