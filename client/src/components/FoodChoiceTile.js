import React from 'react'

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
            <h3><a href={url}>{name}</a></h3>
            <h4>{display_phone}</h4>
            <h4>{location.display_address.join(" ")}</h4>
            <h4>{rating}</h4>
            <h4>{price}</h4>
            <h4>{review_count}</h4>
            <img src={image_url} style={{height: '180px', width: '240px'}} />
        </div>
    )
}

export default FoodChoiceTile