import React, { Component } from 'react'
import { connect } from 'react-redux'

import FoodChoiceTile from './FoodChoiceTile'

const containerStyle = {
    margin: '10px'
}


class FoodChoiceTileContainer extends Component {
    renderTiles = (restaurants) => {
        let total = []

        for (let key in restaurants) {
            let list = restaurants[key]
            let returned = list.map(rest => {
                return <FoodChoiceTile {...rest} key={rest.id} />
            })
            total.push(returned)
        }

        return total
    }

    render() {
        const restaurantsLength = Object.keys(this.props.restaurants).length
        let returned
        restaurantsLength > 0 ? returned = this.renderTiles(this.props.restaurants) : returned = <div>loading...</div>
        return (
            <div style={containerStyle}>
                {returned}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.content.restaurants
    }
}

export default connect(mapStateToProps)(FoodChoiceTileContainer);