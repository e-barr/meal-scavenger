import React from 'react'
import './FoodChoiceTileContainer.css'

const tileStyle = {
    margin: '10px'
}

const FoodChoiceTile = (props) => {
    const { 
        coordinates, 
        display_phone,
        id,
        image_url,
        location,
        name,
        phone,
        price,
        rating,
        review_count,
        url
    } = props
    console.log(props)
    return (
        <div style={tileStyle}>
            <h2><a href={url} target="_blank">{name}</a></h2>
            <p>
                rating: {rating}<br></br>
                price: {price}<br></br>
                # of reviews: {review_count}<br></br>

                <p>
                    call at: {display_phone}<br></br>
                    address: {location.display_address.join(" ")}<br></br>
                </p>
            </p>
            <img src={image_url} style={{height: '180px', width: '240px'}} />
        </div>
    )
}

export default FoodChoiceTile