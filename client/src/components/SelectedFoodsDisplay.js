import React from 'react'
import RestaurantDisplayTile from './RestaurantDisplayTile'

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
            <div style={{ backgroundColor : 'yellow'}}>
                {mapped}
            </div>
        )
    }
}

export default SelectedFoodsDisplay;