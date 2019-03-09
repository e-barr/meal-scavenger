// import React, { Component } from 'react'
import React from 'react'
// import OneRestaurantTile from './OneRestaurantTile'
// const yelp_api_key = `${process.env.REACT_APP_YELP}`


// class FoodChoiceTile extends Component {
//     state = {
//         topTenPicks: [],
//         selected: {}
//     }
    
//     fetchInfo = () => {
//         fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.props.item}&location=77002&limit=10&sort_by=rating`, {
//         method: 'GET',
//         headers: {  Authorization: `Bearer ${yelp_api_key}` }
//         }).then(resp => {
//             const contentType = resp.headers.get("content-type");
//             if(contentType && contentType.includes("application/json")) {
//                 return resp.json();
//             }
//             throw new TypeError("Oops, we haven't got JSON!");
//         })
//         .then(resp => { this.setState({ topTenPicks: resp.businesses }) })
//         .catch(function(error) { console.log(error); }).then(console.log(`state is: ${this.state}`));
//     }

//     renderOneTiles = () => {
//         let rendered = this.state.topTenPicks.map(pick => <OneRestaurantTile key={pick.id} {...pick}/>)
//         return rendered
//     }

//     componentDidMount() {
//         this.fetchInfo()
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.topTenPicks.length > 0 ? this.renderOneTiles(): 'Loading...' }
//             </div>
//         )
//     }
// }

const FoodChoiceTile = () => {
    return (
        <div>FoodChoiceTile</div>
    )
}

export default FoodChoiceTile