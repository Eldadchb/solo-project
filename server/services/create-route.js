const axios = require('axios');
const auth = require("../google-maps-api-key");
const NUMBER_OF_WAYPOINTS = 2;


exports.createRoute = (resturats, attractions, origin) => {
    try {
        const newRoute = { origin: origin, waypoints: [], destination: false, travelMode: 'WALKING' };

        for (let i = 0; i < resturats.results.length && i < NUMBER_OF_WAYPOINTS; i++) {
            let randomInd = Math.round(Math.random() * resturats.results.length - 1)
            // console.log(randomInd, resturats.results.length);
            let temp = resturats.results[randomInd]["geometry"]["location"]
            let convertedPoint = `${temp.lat},${temp.lng}`
            newRoute['waypoints'].push(convertedPoint)
        }

        for (let i = 0; i < attractions.results.length && i < NUMBER_OF_WAYPOINTS; i++) {
            let randomInd = Math.round(Math.random() * attractions.results.length - 1)
            // console.log(randomInd, attractions.results.length);

            let temp = attractions.results[randomInd]["geometry"]["location"]
            let convertedPoint = `${temp.lat},${temp.lng}`
            newRoute['waypoints'].push(convertedPoint)

        }
        newRoute['destination'] = newRoute['waypoints'][Math.round(Math.random() * newRoute['waypoints'].length - 1)]

        return newRoute;

    } catch (error) {
        console.log('ERROR: ', error);
        return false;
    }
};
