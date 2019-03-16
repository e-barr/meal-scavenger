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
                rating: <strong>{rating}</strong><br></br>
                price: <strong>{price}</strong><br></br>
                # of reviews: <strong>{review_count}</strong><br></br>

                <p>
                    {display_phone ? `call at: <strong><a href={tel:+1${display_phone}}>{display_phone}</a></strong><br></br>` : null}
                    address: <strong>{location.display_address.join(" ")}</strong><br></br>
                </p>

            </p>
            <img src={image_url} style={{height: '180px', width: '240px'}} />
            <button className="select-button">SELECT</button>
        </div>
    )
}

export default FoodChoiceTile