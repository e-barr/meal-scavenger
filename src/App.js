import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import RequestZipCode from './RequestZipCode';
import ChooseFoodEntries from './ChooseFoodEntries'
import FoodChoiceTileContainer from './FoodChoiceTileContainer'

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
    return (
      <div className="App">
        <Header />
        {
          this.state.zipCode ? 
          <ChooseFoodEntries
            setFoodEntries={this.setFoodEntries}
           /> : 
          <RequestZipCode 
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
