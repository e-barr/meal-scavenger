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
        debugger;
        const origin = chartMyPathUrl[0]
        const waypoints = chartMyPathUrl[1].slice(0, chartMyPathUrl[1].length - 1)
        const endpoint = chartMyPathUrl[1].slice(chartMyPathUrl.length - 1)
        const hrefUrl = Object.keys(selectedFoods).length > 0 ? `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${endpoint}&waypoints=${waypoints}` : '#'
        return (
            <React.Fragment>
                    <button className="restaurants-selected-button"
                    >
                        <a
                            href={hrefUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CHART MY PATH!
                        </a>
                    </button>
                {returned}
            </React.Fragment>
        )
    }

    generateMyPathUrl = (startAddress, restaurants) => {
        let startPoint = encodeURIComponent(startAddress.formatted_address)
        let restaurantPoints = []
        debugger;

        for (let key in restaurants) {
            restaurantPoints.push(restaurants[key].name)
        }

        restaurantPoints = restaurantPoints.map(restaurantPoint => encodeURIComponent(restaurantPoint)).join("&")

        return [startPoint, restaurantPoints]
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