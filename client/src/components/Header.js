import React, { Component } from 'react'
import { connect } from 'react-redux'

import { clearAll } from '../actions'

const headerStyle = {
    backgroundColor: 'brown',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px',
    width: '100%',
    border: 'none',
    textAlign: 'left'
}

const buttonStyle = {
    backgroundColor: 'inherit',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px'
}

class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <button
                    className="header"
                    style={buttonStyle}
                    onClick={this.props.clearAll}
                >mealScavenger</button>
            </div>
        )
    }
}

export default connect(null, { clearAll })(Header);