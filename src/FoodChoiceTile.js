import React, { Component } from 'react'
import OneTile from './OneTile'
const yelp_api_key = `${process.env.REACT_APP_YELP}`


class FoodChoiceTile extends Component {
    state = {
        topTenPicks: []
    }
    
    fetchInfo = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.props.item}&location=77002&limit=10&sort_by=rating`, {
        method: 'GET',
        headers: {  Authorization: `Bearer ${yelp_api_key}` }
        }).then(resp => {
            const contentType = resp.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return resp.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(resp => { this.setState({ topTenPicks: resp.businesses }) })
        .catch(function(error) { console.log(error); });
    }

    renderOneTiles = () => {
        debugger;
        let rendered = this.state.topTenPicks.map(pick => <OneTile />)
        return rendered
    }
    render() {
        debugger;
        return (
            <div onLoad={this.fetchInfo}>
                {this.state.topTenPicks.length > 0 ? this.renderOneTiles(): 'Loading...' }
                i am a food choice tile, item: {this.props.item}
            </div>
        )
    }
}

export default FoodChoiceTile