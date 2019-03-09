import React, { Component } from 'react'
import { connect } from 'react-redux'

import FoodChoiceTile from './FoodChoiceTile'


class FoodChoiceTileContainer extends Component {
    render() {
        const restaurantsLength = Object.keys(this.props.restaurants).length
        console.log(`restaurantsLength is: ${restaurantsLength}`)
        if (restaurantsLength > 0) {
            return (
                <div>
                    <FoodChoiceTile />
                </div>
            )
        } else {
            return (
                <div>food choice container tile is me!</div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.content.restaurants
    }
}

export default connect(mapStateToProps)(FoodChoiceTileContainer);