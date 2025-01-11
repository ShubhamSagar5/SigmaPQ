import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WeatherCard = ({error,info}) => {
  console.log(info)
    // const info = {
    //     city:"Delhi",
    //     feelsLike: 26.42,
    //     humidity: 35,
    //     temp: 26.68,
    //     tempMax: 26.68,
    //     tempMin: 26.68,
    //     weather: "few clouds",
    //     windSpeed: 4.09
    // }
  if(error){
    return (
        <><p style={{ color: "red" }}>This City does not exist in our App</p>
      <br /></>
    )
  }else if(info){
    return (
    <div>
    
    <br />
         <Card sx={{ maxWidth: 345 }} className='card-w'>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHdSnfw0xayjsksrvJhaJeDG3qvDqvnwWuQ&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component="span">
          <p>Tempreture = {info.temp}°C</p>
          <p>Max Temp = {info.tempMax}°C</p>
          <p>Min Temp = {info.tempMax}°C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Wind Speed = {info.windSpeed}</p>
          <p>The weather of {info.city} can be described as {info.weather} and feels like {info.feelsLike}°C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
   
  )
  }
    
}

export default WeatherCard