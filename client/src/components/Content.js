import React from 'react'
import { connect } from 'react-redux'

import RequestCurrentLocation from './RequestCurrentLocation'
import ChooseFoodEntries from './ChooseFoodEntries'
import FoodChoiceTileContainer from './FoodChoiceTileContainer'

const addressStyle = {
    margin: '10px'
}

const Content = (props) => {
    const restaurantsLength = Object.keys(props.restaurants).length
    console.log('entered content line 14')
    console.log(`restaurantsLength: ${restaurantsLength}`)
    if (Object.keys(props.restaurants).length > 0) {
        return (
            <FoodChoiceTileContainer />
        )
    } else if (props.startAddress !== null && restaurantsLength === 0) {
        return (
            <div style={addressStyle}>
                You have selected <strong>{props.startAddress.formatted_address}</strong> as your starting address
                <ChooseFoodEntries />
            </div>
        )
    } else if (restaurantsLength > 0) {
        return (
            <FoodChoiceTileContainer />
        )
    } else {
        return (
            <RequestCurrentLocation />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        startAddress: state.content.startAddress,
        restaurants: state.content.restaurants
    }
}

export default connect(mapStateToProps)(Content);