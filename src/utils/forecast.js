const request = require('request')

const kelvinToCelcius = (temp) => {
    return temp - 273.15
}

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a6c993056f006c0a12d580b2499aaa33`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod==="401") {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'Current weather status '+ body.weather[0].description + '. It is currently ' + Math.ceil(kelvinToCelcius(body.main.temp)) + ' degress out.')
        }
    })
}

module.exports = forecast