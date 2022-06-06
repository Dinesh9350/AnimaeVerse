import React from "react"

const AnimaeCard = ({ animae }) => {
	return (
		<div className='animae'>
			<div>
				<p>{animae.Year}</p>
			</div>
			<div>
				<img src={animae.Poster !== 'N/A' ? animae.Poster : 'https:/via.placeholder.com/400'} alt={animae.Title} />
			</div>
			<div>
				<span>{animae.Type}</span>
				<h3>{animae.Title}</h3>
			</div>
		</div>
	)
}

export default AnimaeCard;