import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const google = window.google;

const address_api = `${process.env.REACT_APP_ADDRESS_AUTOCOMPLETE_API}`

class RequestCurrentLocation extends Component {
    constructor(props) {
        super(props)
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
    }

    state = {
        currentInput: ''
    }

    changeCurrentInput = currentInput => {
        this.setState({
            currentInput
        })
    }

    initAutocomplete = () => {
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { types: 'address' })
        autocomplete.addListener('place_changed', this.props.setInitialAddress)
    }

    render() {
        return (
            <div className="request-zip-code">
                Please provide your current location.
                <form onSubmit={event => this.props.changeZipCode(event, this.state.currentInput)}>
                    <div id="locationField">
                        <input
                            type="text"
                            id="autocomplete"
                            onFocus="geolocate()"
                            placeholder="type starting location here"
                            onKeyUp={event => this.changeCurrentInput(event.target.value)}
                        ></input>
                    <button type="submit">let me choose my foods now!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RequestCurrentLocation