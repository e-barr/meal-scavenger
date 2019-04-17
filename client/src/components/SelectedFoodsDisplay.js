import React from 'react'
import RestaurantDisplayTile from './RestaurantDisplayTile'
import './FoodChoiceTileContainer.css'

const SelectedFoodsDisplay = ({ selectedRestaurants }) => {
    let length = Object.keys(selectedRestaurants).length
    if (length === 0) {
        return null
    } else {
        const mapped = []

        for (let food in selectedRestaurants) {
            let restaurant = selectedRestaurants[food]
            mapped.push(<RestaurantDisplayTile {...restaurant} />)
        }
        return (
            <div className="one-container">
                {mapped}
            </div>
        )
    }
}

export default SelectedFoodsDisplay;