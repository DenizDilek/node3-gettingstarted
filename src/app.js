const express = require('express')
const path = require('path')
const fileDirectory = path.join(__dirname ,"../public")
const aboutDirectory = path.join(__dirname , "../public/about.html")
const app = express()
const geocode = require('../utils/geocode.js')
const forecast = require('../utils/forecast.js')
app.set("view engine",'hbs')
app.use(express.static(fileDirectory))

app.get('',(req,res)=>{
    res.render("index")
})

app.get('/weather', (req,res)=>{
    if(!req.query.search){
        return res.send({
            error : 'You need to write smth'
        })
    }

    
        geocode.geocode(req.query.search , (error,{latitude,longitude,location})=>{
            if(error){
                return res.send({error})
            }
            forecast.forecast(latitude,longitude,(error,forecastData)=>{
                if(error){
                    return res.send({error})
                } 
                res.send({
                    forecast : forecastData,
                    location,
                    address:req.query.search
                })
            })
        })
    
})

app.get("*",(req,res)=>{
    res.send("Error 404")
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})