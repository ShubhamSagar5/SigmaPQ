import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import { useState } from 'react';
import WeatherCard from './WeatherCard';
const apiKey = import.meta.env.VITE_APP_KEY;



const SearchWeather = ({setError,setData}) => {
   
    const [city,setCity] = useState("")
   
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
   
    const handleChange = (e) => {
        setCity(e.target.value)
        
    }

    const getweather = async() => {
const data = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`)
        const jsonData = await data.json()
        setError(false)
        return jsonData
    }

    const handleSubmit = async(e) => {
        try {
            e.preventDefault()
            const jsonData = await getweather()
            const result = {
            city:city,
            humidity :jsonData.main.humidity ,
            temp:jsonData.main.temp,
            tempMin:jsonData.main.temp_min,
            tempMax:jsonData.main.temp_max,
            feelsLike:jsonData.main.feels_like,
            weather:jsonData.weather[0].description,
            windSpeed:jsonData.wind.speed
           }
           setData(result)
           
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div>
            <h3>Search Weather </h3>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" value={city} variant="outlined" onChange={(e)=>handleChange(e)} required />
            <br />
            <br />
            <Button variant="contained" type='submit'>Search</Button>
            </form>
           
        </div>
    )
}

export default SearchWeather