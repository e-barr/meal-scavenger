import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import './App.css';
import Header from './Header'
import RequestCurrentLocation from './RequestCurrentLocation';
import ChooseFoodEntries from './ChooseFoodEntries'
import FoodChoiceTileContainer from './FoodChoiceTileContainer'

const address_api = `${process.env.REACT_APP_ADDRESS_AUTOCOMPLETE_API}`

class App extends Component {
  state = {
    zipCode: '',
    foodEntries: [],
    foodEntriesSelected: false
  }

  changeZipCode = newZipCode => {
    this.setState({
      zipCode: newZipCode
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
    console.log(`address api is: ${address_api.length > 0}`)
    return (
      <div className="App">
        <Helmet>
          <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${address_api}&libraries=places`}></script>
        </Helmet>
        <Header />
        {
          this.state.zipCode ? 
          <ChooseFoodEntries
            setFoodEntries={this.setFoodEntries}
           /> : 
          <RequestCurrentLocation 
            changeZipCode={this.changeZipCode}
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
