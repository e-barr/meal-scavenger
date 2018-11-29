import React, { Component } from 'react'
import FoodChoiceTile from './FoodChoiceTile'

class FoodChoiceTileContainer extends Component {
    renderEntres = () => {
        let allEntres = []
        let entries = this.props.foodEntries

        entries.forEach(entry => allEntres.push(<FoodChoiceTile item={entry} key={entry}/>))

        return allEntres
    }

    render() {
        return (
            <div>food choice container tile is me! and entres are: {this.renderEntres()}</div>
        )
    }
}

export default FoodChoiceTileContainer