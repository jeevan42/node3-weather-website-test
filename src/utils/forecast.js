const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=255748ad0a631e586fb67c6eaa51277a`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unanble to connect to weather service', undefined);
        } else if (body.error) {
            callback('unable to find location', undefined);
        } else {
            callback(undefined, 'Actual Temperature Of ' + body.name + ' is ' + body.main.temp + ' degree and humadity is ' + body.main.humidity);
        }
    
    })


}


module.exports = forecast