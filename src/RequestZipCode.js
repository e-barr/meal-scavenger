import React, { Component } from 'react'

class RequestZipCode extends Component {
    state = {
        currentInput: ''
    }

    changeCurrentInput = currentInput => {
        this.setState({
            currentInput
        })
        console.log(this.state.currentInput)
    }
    render() {
        return (
            <div className="request-zip-code">
                Please provide your 5 digit zip code.
                <form onSubmit={() => this.props.changeZipCode(this.state.currentInput)}>
                    <input type="text" pattern="[0-9]{5}" onChange={event => this.changeCurrentInput(event.target.value)}></input>
                    <button type="submit">let me choose my foods now!</button>
                </form>
            </div>
        )
    }
}

export default RequestZipCode