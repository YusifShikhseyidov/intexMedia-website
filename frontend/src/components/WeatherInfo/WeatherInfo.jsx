import axios from "axios"
import { useEffect, useState } from "react"
import classes from "./WeatherInfo.module.css"
import { SiWindicss } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { FaTemperatureFull } from "react-icons/fa6";

// weather condition logos
import cloudyday from "./assets/fewclouds.png"
import cloudynight from "./assets/fewcloudsnight.png"
import drizzle from "./assets/drizzling.svg"
import clearday from "./assets/clear.png"
import clearnight from "./assets/clearnight.svg"
import thunderstorm from "./assets/thunderstorm.svg"
import rainy from "./assets/raining-weather.svg"
import misty from "./assets/misty.svg"
import snow from "./assets/snow.png"

export default function WeatherInfo() {
  const [city, setCity] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')
  const [temperature, setTemperature] = useState('')
  const [wind, setWind] = useState('')
  const [weatherDescription, setWeatherDescription] = useState([])


  const apiKey = "91584563c0e0f5094cb5f0c59da6e1ea"
  const weatherCity = "Berlin"
  const unitsSystem = "metric"

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=${apiKey}&units=${unitsSystem}`


  useEffect(()=>{
    const getWeatherData = async () => {
      const response = await axios.get(url)
      console.log(response.data)
      setCity(response.data.name)
      setWeatherIcon(response.data.weather[0].icon)
      setWeatherDescription(response.data.weather[0])
      setTemperature(response.data.main)
      setWind(response.data.wind.speed)
    }

    getWeatherData()

  }, [url])

  return (
    <div className={classes.weather_info_box}>
      <p>{city}</p>
      <div className={classes.degree_and_weatherIcon}>
        <div className={classes.weather_logo_box}>
          {weatherIcon==='01d' ? <img src={clearday} alt="clear day weather"/>
            : weatherIcon==='01n' ? <img src={clearnight} alt="clear night weather"/>
            : (weatherIcon==='02d' || weatherIcon==='03d' || weatherIcon==='04d') ? <img src={cloudyday} alt="cloudy day weather"/>
            : (weatherIcon==='02n' || weatherIcon==='03n' || weatherIcon==='04n') ? <img src={cloudynight} alt="cloudy night weather"/>
            : (weatherIcon==='10d' || weatherIcon==='10n') ? <img src={rainy} alt="rainy weather"/>
            : (weatherIcon==='09d' || weatherIcon==='09n') ? <img src={drizzle} alt="drizzle rain weather"/>
            : (weatherIcon==='11d' || weatherIcon==='11n') ? <img src={thunderstorm} alt="stormy weather"/>
            : (weatherIcon==='13d' || weatherIcon==='13n') ? <img src={snow} alt="snowy weather"/>
            : (weatherIcon==='50d' || weatherIcon==='50n') ? <img src={misty} alt="snowy weather"/>
            : <span>no weather</span>
          }
        </div>
        {'-'}
        <span>{Number(temperature.temp).toFixed()}°C</span>
      </div>
      <span>{weatherDescription.description}</span>
      <div className={classes.extra_info_box}>
        <div><span>Min Temp</span><span><FaTemperatureEmpty />{Number(temperature.temp_min).toFixed()}°C</span></div>
        <div><span>Max Temp</span><span><FaTemperatureFull />{Number(temperature.temp_max).toFixed()}°C</span></div>
        <div><span>Wind</span><span><SiWindicss /> &nbsp;&nbsp;{Number(wind)}km/h</span></div>
        <div><span>Humidity</span><span><WiHumidity />{Number(temperature.humidity).toFixed()}%</span></div>
      </div>      
      
    </div>
  )
}
