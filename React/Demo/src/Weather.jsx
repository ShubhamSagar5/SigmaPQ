import React, { useState } from 'react'
import SearchWeather from './SearchWeather'
import WeatherCard from './WeatherCard'

const Weather = () => {
      const [data,setData] = useState({})

    const [error,setError] = useState(false)
  
    return (
    <div>
        <SearchWeather setError={setError} setData={setData}/>
        <WeatherCard error={error} info={data}/>
    </div>
    )
}

export default Weather