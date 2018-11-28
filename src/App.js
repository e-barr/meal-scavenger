import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import RequestZipCode from './RequestZipCode';

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
          `The zip code you have provided is ${this.state.zipCode}` : <RequestZipCode 
            changeZipCode={this.changeZipCode}
          />
          }
      </div>
    );
  }
}

export default App;
