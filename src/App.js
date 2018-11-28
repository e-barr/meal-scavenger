import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import RequestZipCode from './RequestZipCode';
import ChooseFoodEntries from './ChooseFoodEntries'

class App extends Component {
  state = {
    zipCode: '',
    foodEntries: []
  }

  changeZipCode = newZipCode => {
    this.setState({
      zipCode: newZipCode
    })
  }

  changeFoodEntries = foodEntries => {
    this.setState({
      foodEntries
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.zipCode ? 
          <ChooseFoodEntries /> : 
          <RequestZipCode 
            changeZipCode={this.changeZipCode}
          />
          }
      </div>
    );
  }
}

export default App;
