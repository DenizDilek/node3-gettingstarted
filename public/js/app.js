console.log("Client side javascript file isloaded !!!!")
// fetch('https://api.darksky.net/forecast/39d2e601cdf3c615588cd0f61aa3c210/37.8267,-122.4233').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
var fetchData = ''
var fetchResult = {}
const message = document.querySelector('#message')


const fetchWeather=(fetchData,fetchResult,message)=>{
    fetch('http://den-something-weather-related.herokuapp.com/weather?search='+fetchData)
    .then(res=>res.text())
    .then(res=>console.log(res))
}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetchData = search.value
    fetchWeather(fetchData,fetchResult,message)
    
})