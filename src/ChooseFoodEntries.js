import React, { Component } from 'react'

class ChooseFoodEntries extends Component {
    state = {
        first: '',
        second: '',
        third: ''
    }

    changeItem = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    fetchFoodEntries = () => {
        let entries = this.filterEntries();
        console.log(entries)
    }

    filterEntries = () => {
        let entries = Object.values(this.state).filter(value => value !== "")
        return entries;
    }

    render() {
        let { first, second, third } = { ...this.state }
        return (
                <div className="choose-food-entries">
                    I want to search for the best (up to three items):
                    <br></br>
                    <form onSubmit={(event) => this.props.setFoodEntries(event, [first, second, third])}>
                        <input 
                            type="text"
                            placeholder="food item"
                            name="first"
                            onChange={this.changeItem}
                        />
                        <br></br>
                        <input
                            type="text"
                            placeholder="food item"
                            name="second"
                            onChange={this.changeItem} 
                            />
                        <br></br>
                        <input
                            type="text"
                            placeholder="food item"
                            name="third"
                            onChange={this.changeItem} 
                        />
                        <br></br>
                        <button onClick={this.fetchFoodEntries()}>start scavenging!</button>
                    </form>
                    <br></br>
                    in my area.
                </div>
        )
    }
}

export default ChooseFoodEntries