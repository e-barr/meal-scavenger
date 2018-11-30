import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import RequestCurrentLocation from './RequestCurrentLocation';
import ChooseFoodEntries from './ChooseFoodEntries'
import FoodChoiceTileContainer from './FoodChoiceTileContainer'

const AddressDetails = props => {
  return (
    <div>
      You have set your starting address at: <strong>
        {props.startAddress}
      </strong>
    </div>
  )
}

class App extends Component {
  state = {
    startAddress: '',
    startAddressId: '',
    startAddressPlaceId: '',
    foodEntries: [],
    foodEntriesSelected: false
  }

  setStartAddress = ({ formatted_address, id, place_id }) => {
    this.setState({
      startAddress: formatted_address,
      startAddressId: id,
      startAddressPlaceId: place_id 
    })
  }

  setFoodEntries = (event, entries) => {
    event.preventDefault()
    let foodEntries = entries.filter(entry => entry !== "")
    this.setState({
      foodEntries,
      foodEntriesSelected: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.startAddress ? 
          <React.Fragment>
            <ChooseFoodEntries
            setFoodEntries={this.setFoodEntries}
           />
           <AddressDetails 
            startAddress={this.state.startAddress} 
            />
           </React.Fragment> : 
          <RequestCurrentLocation 
            setStartAddress={this.setStartAddress}
            // showPlaceDetails={this.showPlaceDetails}
          />
          }
          {
            this.state.foodEntries.length > 0 && this.state.foodEntriesSelected ?
            <FoodChoiceTileContainer 
              foodEntries={this.state.foodEntries}
            /> : null
          }
      </div>
    );
  }
}

export default App;
