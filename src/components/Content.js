import React from 'react'
import { connect } from 'react-redux'

import RequestCurrentLocation from './RequestCurrentLocation'

const Content = (props) => {
    if (props.startAddress !== null) {
        return (
            <div>
                You have selected <strong>{props.startAddress.formatted_address}</strong> as your starting address
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