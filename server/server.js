const axios = require('axios')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;
const configuredAxios = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses'
})


app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

const getRestaurantInfo = async (req, res) => {
    const { key, term, zip } = req.body
    configuredAxios.defaults.headers.common['Authorization'] = `Bearer ${key}`

    try {
        const result = await configuredAxios.get(`/search?term=${term}&location=${zip}&limit=10&sort_by=rating`)
        res.send({ "restaurants": result.data.businesses })
    } catch (error) {
        res.send({ 'error': error.message })
    }
}

app.post('/api/', getRestaurantInfo);


app.listen(port, () => console.log(`Listening on port ${port}`));