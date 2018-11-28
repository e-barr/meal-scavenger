import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import RequestZipCode from './RequestZipCode';
import ChooseFoodEntries from './ChooseFoodEntries'

class App extends Component {
  state = {
    zipCode: ''
  }

  changeZipCode = newZipCode => {
    this.setState({
      zipCode: newZipCode
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.zipCode ? 
          <ChooseFoodEntries 
            zipCode={this.state.zipCode}
          /> : 
          <RequestZipCode 
            changeZipCode={this.changeZipCode}
          />
          }
      </div>
    );
  }
}

export default App;
