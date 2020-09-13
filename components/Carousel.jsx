import React from 'react'

export default function Carousel(){
	const [showNumber, setShowNumber] = React.useState(0)
	
	const nextView = () => {
		setShowNumber(prevState => {
			if(prevState == 3) return 0
				return prevState+1
		})
	}

	const prevView = () => {
		setShowNumber(prevState => {
			if(prevState == 0) return 3
				return prevState-1
		})
	}

	return (
		<div className="w3-content w3-display-container">
		  <div style={{
		  	width: "100%", height: "210px", backgroundColor: 'red', 
		  	display: showNumber==0?"block":"none"}} 
		  />
		  <div style={{
		  	width: "100%", height: "210px", backgroundColor: 'yellow', 
		  	display: showNumber==1?"block":"none"}} 
		  />
		  <div style={{
		  	width: "100%", height: "210px", backgroundColor: 'black', 
		  	display: showNumber==2?"block":"none"}} 
		  />
		  <div style={{
		  	width: "100%", height: "210px", backgroundColor: 'green', 
		  	display: showNumber==3?"block":"none"}} 
		  />

		  <button className="w3-button w3-theme w3-display-left" onClick={prevView}>&#10094;</button>
		  <button className="w3-button w3-theme w3-display-right" onClick={nextView}>&#10095;</button>
		</div>
	)
}