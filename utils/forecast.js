const request = require("request")
const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/39d2e601cdf3c615588cd0f61aa3c210/' + latitude +","+longitude
    request({url:url , json:true},(error,response)=>{
        if(error){
            callback("Cannot connect service",undefined)
        }
        else if(response.body.error){
            callback("cannot find location",undefined)
        }
        else{
            callback(undefined,response.body.daily.data[0].summary + '   it is currently   '+ response.body.currently.temperature + ' fahrenheit and there is a ' + response.body.currently.precipProbability + '% chance to rain.')
        }
    }
    )
}
module.exports = {
    forecast:forecast
}