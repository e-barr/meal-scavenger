import React, { Component } from 'react'

class OneRestaurantTile extends Component {
    render() {
        return(
            <div className="one-restaurant-tile">
                <h2><a href={this.props.url}>{this.props.name}</a></h2>
                <h3>{this.props.phone}</h3>
                <h3>{this.props.price}</h3>
                <h3>{this.props.rating}</h3>
                <button>SELECT</button>
            </div>
        )
    }
}

export default OneRestaurantTile;