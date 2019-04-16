import React, { Component } from 'react'
import './FoodChoiceTile.css'

const tileStyle = {
    margin: '10px'
}

class FoodChoiceTile extends Component {
    render() {
        const { 
            display_phone,
            image_url,
            location,
            name,
            price,
            rating,
            review_count,
            url,
            foodKey
        } = this.props

        return (
            <div style={tileStyle} className="one">
                <img src={image_url} className="one-img" alt={name}/>
                <div>
    
                <h4><a href={url} target="_blank" rel="noopener noreferrer" >{name}</a></h4>
                <div style={{ padding: '15px' }}>
                    rating: <strong>{rating}</strong><br></br>
                    price: <strong>{price}</strong><br></br>
                    # of reviews: <strong>{review_count}</strong><br></br>
    
                    <p>
                        call at: <strong><a href={`tel:+1${display_phone}`}>{display_phone}</a></strong><br></br>
                        address: <strong>{location.display_address.join(" ")}</strong><br></br>
                    </p>
                    <button
                        className="select-button"
                        onClick={(props) => console.log(`selected ${name}, foodKey is: ${foodKey}!`)}
                    >
                        SELECT
                    </button>
    
                </div>
                </div>
            </div>
        )
    }
 
}

export default FoodChoiceTile