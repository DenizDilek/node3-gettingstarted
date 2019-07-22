const request = require("request")

const geocode = (adress,callback) =>{
    
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(adress) +".json?access_token=pk.eyJ1IjoiYWllZnJlZXQiLCJhIjoiY2p5OXlzOHllMDhsdjNka2hhbGdhcHcxdSJ9.lEFja-Z5FW4uM39FMeqYPA&limit=1"
    request({url:url , json:true },(error,response)=>{
            if(error){
             callback("Can not connect to services",undefined)
            }
            else if(response.body.features.length === 0){
                callback("Can not find location", undefined)
            }
            else{
                callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
            // console.log("Latitute:     "+latitute +"    "+"Longitute:  "+ longitute)})
            }
                })
            
}
module.exports = {
    geocode:geocode
}