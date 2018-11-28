import React, { Component } from 'react'

class ChooseFoodEntries extends Component {
    state = {
        foodEntries: [],
        inputFieldCount: 1,
    }

    addInputField = () => {
        this.setState({
            inputFieldCount: this.state.inputFieldCount + 1
        })
    }

    renderInputFields = () => {
        const fieldCount = this.state.inputFieldCount
        let inputFieldsContainer = []

        for (let i = 1; i <= fieldCount; i++) {
            inputFieldsContainer.push(<li key={i}><input type="text" placeholder="food item"></input></li>)
        }

        return (
            <div className="input-fields-container">
            {inputFieldsContainer}
            </div>
        )
    }

    render() {
        return (
                <div className="choose-food-entries">
                    I want to search for the best:
                    <button onClick={this.addInputField}>+</button>
                    <br></br>
                    {this.renderInputFields()}
                    <br></br>
                    in my area.
                    <button>start scavenging!</button>
                </div>
        )
    }
}

export default ChooseFoodEntries