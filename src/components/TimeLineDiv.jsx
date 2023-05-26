import React from 'react'
import './CurrWeather.css';
const TimeLineDiv = ({ forecast, index }) => {
      return (

            <div className='bor'>
                  <b>{index}:00</b>
                  <img className='currImg' src={forecast.forecastday[0].hour[index].condition.icon} alt="" />
                  <b>{forecast.forecastday[0].hour[index].temp_c}</b>
            </div>

      )
}

export default TimeLineDiv