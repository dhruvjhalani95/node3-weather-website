const request = require('request');

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=9449416d36e5343debb67df3041d75e6&query=' + latitude + ',' + longitude + '&units=f';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if(body.error){
            callback('Unable to find location!', undefined);
        } else {
            const data = body.current;
            callback(undefined, 'It is currently ' + data.temperature + ' degree celcius outside right now! But it feels like ' + data.feelslike + ' degrees.');
        }
    });
}

module.exports = forecast;