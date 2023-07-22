// Geocoding

//  below i want to use an get api from internet in which i give place name and i get latitude and longitude , and i then use the lat and long in the weather getting url , BUT unfortunately i was not get any free api, so for test i just making the fake or hard copy function which guve me lat and long if i give it place name as agrunment.

// const geoUrl = "http://api.positionstack.com/v1/forward?access_key=4f270b932becc26a1b7eda13fda35d44&query= 1600 Pennsylvania Ave NW, Washington DC"


// request({ url: geoUrl, json: true }, (error, response) => {
//     console.log(response);
// })


const geocode = (address, callback) => {
    if(address === 'Ludhiana'){
        callback(undefined,{
            latitude: 30.900965,
            longitude: 75.857277
        })
    }else{
        callback('unknown address or unable to connect', undefined);
    }
}


module.exports = geocode;