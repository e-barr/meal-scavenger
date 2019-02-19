import React from 'react'
import { connect } from 'react-redux'

import RequestCurrentLocation from './RequestCurrentLocation'
import ChooseFoodEntries from './ChooseFoodEntries'

const addressStyle = {
    margin: '10px'
}

const Content = (props) => {
    if (props.startAddress !== null) {
        return (
            <div style={addressStyle}>
                You have selected <strong>{props.startAddress.formatted_address}</strong> as your starting address
                <ChooseFoodEntries />
            </div>
        )
    } else {
        return (
            <RequestCurrentLocation />
        )
    }
}

const mapStateToProps = (state) => {
    // debugger;
    return {
        startAddress: state.address.startAddress
    }
}

export default connect(mapStateToProps)(Content);