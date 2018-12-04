import React, { Component } from 'react'
const yelp_api_key = `${process.env.REACT_APP_YELP}`

class FoodChoiceTile extends Component {
    state = {
        topTenPicks: []
    }
    
    fetchInfo = () => {
        debugger;
        console.log(yelp_api_key);
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.props.item}&location=77002&limit=10&sort_by=rating`, {
        method: 'GET',
        headers: {  Authorization: `Bearer ${yelp_api_key}` }
        }).then(function(response) {
            const contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(function(json) { console.log(json) })
        .catch(function(error) { console.log(error); });
    }
    render() {
        return (
            <div>
                i am a food choice tile, item: <h4 onClick={this.fetchInfo()}>{this.props.item}</h4>
            </div>
        )
    }
}

export default FoodChoiceTile