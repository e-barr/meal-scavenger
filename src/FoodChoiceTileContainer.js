import React, { Component } from 'react'
import FoodChoiceTile from './FoodChoiceTile'
const yelp_api_key = `${process.env.REACT_APP_YELP}`

class FoodChoiceTileContainer extends Component {
    state = {
        first: '',
        second: '',
        third: ''
    }

    renderEntres = () => {
        let allEntres = []
        let entries = this.props.foodEntries

        entries.forEach(entry => allEntres.push(<FoodChoiceTile item={entry} key={entry} fetchInfo={this.fetchInfo}/>))

        return allEntres
    }

    fetchInfo = (key, searchTerm) => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=77002&limit=10&sort_by=rating`, {
        method: 'GET',
        headers: {  Authorization: `Bearer ${yelp_api_key}` }
        }).then(resp => {
            const contentType = resp.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return resp.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(resp => { this.setState({ [key]: resp.businesses }) })
        .catch(function(error) { console.log(error); });
    }

    render() {
        return (
            <div>food choice container tile is me! and entres are: {this.renderEntres()}</div>
        )
    }
}

export default FoodChoiceTileContainer