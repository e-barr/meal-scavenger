import React, { Component } from 'react'

const headerStyle = {
    backgroundColor: 'brown',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px'
}

class Header extends Component {
    render() {
        return (
            <div
                className="header"
                style={headerStyle}
            >mealScavenger</div>
        )
    }
}

export default Header