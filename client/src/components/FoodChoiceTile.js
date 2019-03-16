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
        <div style={tileStyle} className="one">
            <img src={image_url} className="one-img" />
            <div>

            <h4><a href={url} target="_blank">{name}</a></h4>
            <p style={{ padding: '15px' }}>
                rating: <strong>{rating}</strong><br></br>
                price: <strong>{price}</strong><br></br>
                # of reviews: <strong>{review_count}</strong><br></br>

                <p>
                    call at: <strong><a href={`tel:+1${display_phone}`}>{display_phone}</a></strong><br></br>
                    address: <strong>{location.display_address.join(" ")}</strong><br></br>
                </p>
                <button className="select-button">SELECT</button>

            </p>
            </div>
            {/* <img src={image_url} style={{height: '180px', width: '240px'}} className="one-img" /> */}
        </div>
    )
}

export default FoodChoiceTile