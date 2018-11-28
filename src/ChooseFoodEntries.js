import React, { Component } from 'react'

class ChooseFoodEntries extends Component {
    render() {
        return (
                <div className="choose-food-entries">
                    this is choose food entries, for zip code: {this.props.zipCode}
                </div>
        )
    }
}

export default ChooseFoodEntries