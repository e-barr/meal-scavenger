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
        const restaurantsLength = Object.keys(this.props.restaurants).length
        let returned
        restaurantsLength > 0 ? returned = this.renderTiles(this.props.restaurants) : returned = <div>loading...</div>
        return (
            <React.Fragment>
                    <button className="restaurants-selected-button">CHART MY PATH!</button>
                {returned}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.content.restaurants,
        selectedFoods: state.content.selectedFoods,
        startAddress: state.content.startAddress
    }
}

export default connect(mapStateToProps)(FoodChoiceTileContainer);