import React, { Component } from 'react'
import { connect } from 'react-redux'

import FoodChoiceTile from './FoodChoiceTile'
import './FoodChoiceTileContainer.css'


class FoodChoiceTileContainer extends Component {
    renderTiles = (restaurants) => {
        let total = []

        for (let key in restaurants) {
            let list = restaurants[key]
            let returned = list.map(rest => {
                return <FoodChoiceTile {...rest} key={rest.id}/>
            })
            returned = <div className="one-container">{returned}</div>
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
        restaurants: state.content.restaurants
    }
}

export default connect(mapStateToProps)(FoodChoiceTileContainer);