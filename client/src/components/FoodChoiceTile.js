import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FoodChoiceTile.css'
import { oneRestaurantSelected } from '../actions'

const tileStyle = {
    margin: '10px'
}

class FoodChoiceTile extends Component {
    render() {
        const foodKey = this.props.foodKey
        const restaurantInfo = this.props.restaurantInfo
        const selectedRestaurants = this.props.selectedRestaurants

        const {
            display_phone,
            image_url,
            location,
            name,
            price,
            rating,
            review_count,
            url,
            id
        } = restaurantInfo

        const selectedIds = []

        for (let key in selectedRestaurants)  {
            let id = selectedRestaurants[key].id
            selectedIds.push(id)
        }

        const buttonColor = selectedIds.includes(id) ? { } : { backgroundColor: 'rgb(223, 63, 63)' }
        const buttonText = selectedIds.includes(id) ? 'SELECTED' : 'SELECT'

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
                        style={ buttonColor }
                        onClick={() => this.props.oneRestaurantSelected({ foodKey, restaurantInfo })}
                    >
                        {buttonText}
                    </button>
    
                </div>
                </div>
            </div>
        )
    }
 
}

const mapStateToProps = (state) => {
    return {
        selectedRestaurants: state.content.selectedRestaurants
    }
}

export default connect(mapStateToProps, { oneRestaurantSelected })(FoodChoiceTile)