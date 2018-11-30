import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import RequestCurrentLocation from './RequestCurrentLocation';
import ChooseFoodEntries from './ChooseFoodEntries'
import FoodChoiceTileContainer from './FoodChoiceTileContainer'

const AddressDetails = props => {
  return (
    <div>
      <pre>{JSON.stringify(props.place, null, 2)}</pre>
    </div>
  )
}

class App extends Component {
  state = {
    startAddress: '',
    foodEntries: [],
    foodEntriesSelected: false
  }

  showPlaceDetails = (place) => {
    console.log(place);
    this.setState({ place });
  }

  setStartAddress = startAddress => {
    console.log(startAddress)
    this.setState({
      startAddress
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
            place={this.state.startAddress} 
            />
           </React.Fragment> : 
          <RequestCurrentLocation 
            setStartAddress={this.setStartAddress}
            showPlaceDetails={this.showPlaceDetails}
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
