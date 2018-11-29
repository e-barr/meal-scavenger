import React, { Component } from 'react'

class FoodChoiceTile extends Component {
    render() {
        return (
            <div>
                i am a food choice tile, item: {this.props.item}
            </div>
        )
    }
}

export default FoodChoiceTile