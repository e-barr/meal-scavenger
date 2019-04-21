import React, { Component } from 'react'
import { connect } from 'react-redux'

import FoodChoiceTile from './FoodChoiceTile'
import './FoodChoiceTileContainer.css'

class FoodChoiceTileContainer extends Component {
    renderTiles = (restaurants) => {
        let total = []
        let foodChoices = Object.values(this.props.selectedFoods)

        for (let key in restaurants) {
            let list = restaurants[key]
            let foodKey = foodChoices[key]
            let returned = list.map(rest => {
                return <FoodChoiceTile restaurantInfo={rest} foodKey={foodKey} key={rest.id}/>
            })
            returned = <div key={foodKey} className="one-container">{returned}</div>
            total.push(returned)
        }

        return total
    }

    render() {
        const { restaurants, startAddress, selectedFoods, selectedRestaurants } = this.props
        const restaurantsLength = Object.keys(restaurants).length
        let returned
        restaurantsLength > 0 ? returned = this.renderTiles(restaurants) : returned = <div>loading...</div>
        const chartMyPathUrl = this.generateMyPathUrl(startAddress, selectedRestaurants)
        const hrefUrl = Object.keys(selectedFoods).length > 0 ? `${chartMyPathUrl}` : '#'
        return (
            <React.Fragment>
                        <a
                            href={hrefUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            // onClick={() => setTimeout(800, this.href = hrefUrl)}
                        >
                        <button
                            className="restaurants-selected-button"
                        >
                            CHART MY PATH!
                        </button>
                        </a>
                {returned}
            </React.Fragment>
        )
    }

    generateMyPathUrl = (startAddress, restaurants) => {
        let startPoint = encodeURIComponent(startAddress.formatted_address)
        let restaurantPoints = []
        let foodChoices = Object.keys(restaurants)
        let foodChoicesLength = foodChoices.length
        let endPoint
        let hrefUrl = `https://www.google.com/maps/dir/?api=1`
        
        for (let i = 0; i < foodChoicesLength; i++) {
            let key = foodChoices[i]
            let restaurant = restaurants[key]
            let info = `${restaurant.name} ${restaurant.location.address1} ${restaurant.location.city}`

            if (i === foodChoicesLength - 1) {
                endPoint = encodeURIComponent(info)
            } else {
                restaurantPoints.push(info)
            }
        }
        
        let encodedRestaurantPoints = restaurantPoints.map(restaurantPoint => encodeURIComponent(restaurantPoint)).join("|")
        
        
        if (restaurantPoints.length === 0) {
            hrefUrl += `&origin=${startPoint}&destination=${endPoint}`
        } else {
            hrefUrl += `&origin=${startPoint}&destination=${endPoint}&waypoints=${encodedRestaurantPoints}`
        }

        return hrefUrl
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.content.restaurants,
        selectedFoods: state.content.selectedFoods,
        startAddress: state.content.startAddress,
        selectedRestaurants: state.content.selectedRestaurants
    }
}

export default connect(mapStateToProps)(FoodChoiceTileContainer);