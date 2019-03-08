import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setStartAddress } from '../actions'

const google = window.google;

const requestCurrentLocationStyling = {
  margin: '10px 5% 10px 5%',
  borderRadius: '5px',
  border: '1px solid grey',
  height: '15px',
  width: '90%',
  padding: '5px'
}

class RequestCurrentLocation extends Component {
    constructor(props) {
      super(props);
      this.autocompleteInput = React.createRef();
      this.autocomplete = null;
    }
  
    componentDidMount() {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.autocompleteInput.current,
        { types: ["geocode"] }
      );
  
      this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    }
  
    handlePlaceChanged = () => {
      const place = this.autocomplete.getPlace();
      this.props.setStartAddress(place);
    }
  
    render() {
      return (
        <div>
            <input
            ref={this.autocompleteInput}
            id="autocomplete"
            placeholder="Enter your address"
            type="text"
            style={requestCurrentLocationStyling}
            />
        </div>
      );
    }
  }
  
  export default connect(null, { setStartAddress })(RequestCurrentLocation);
  