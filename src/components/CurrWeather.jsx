import React from 'react'
import './CurrWeather.css';
import TimeLineDiv from './TimeLineDiv';
const CurrWeather = ({ current, city, forecast }) => {
      console.log(forecast.forecastday[0].date);
      return (
            <div className='container'>
                  <header>{city}</header>
                  <div className="currentWeatherDisplay">
                        <span>{current.temp_c + " deg"}</span>
                        < img className="mainImg" src={current.condition.icon} alt="" />
                        <span>{current.condition.text}</span>
                        <h2>{forecast.forecastday[0].date}</h2>
                  </div>
                  <div className="daySlider">
                        {forecast.forecastday[0].hour.map((item, index) => {
                              if (index % 3 === 0) {
                                    return (
                                          <TimeLineDiv forecast={forecast} index={index} />

                                    )
                              }
                        })}
                  </div>
                  <div className='repDiv'>
                        <div className="topDiv">
                              <div>
                                    <span>{forecast.forecastday[1].date}</span>
                                    <img src={forecast.forecastday[1].day.condition.icon} alt="" />
                                    <span>{forecast.forecastday[1].day.maxtemp_c} Deg</span>
                              </div>
                              <div>
                                    <span>{forecast.forecastday[2].date}</span>
                                    <img src={forecast.forecastday[2].day.condition.icon} alt="" />
                                    <span>{forecast.forecastday[2].day.maxtemp_c} Deg</span>
                              </div>
                              <div>
                                    <span>{forecast.forecastday[3].date}</span>
                                    <img src={forecast.forecastday[3].day.condition.icon} alt="" />
                                    <span>{forecast.forecastday[3].day.maxtemp_c} Deg</span>
                              </div>
                        </div>
                        <hr />
                        <div className="botDiv">
                              <div>
                                    <span>{forecast.forecastday[4].date}</span>
                                    <img src={forecast.forecastday[4].day.condition.icon} alt="" />
                                    <span>{forecast.forecastday[4].day.maxtemp_c} Deg</span>
                              </div>
                              <div>
                                    <span>{forecast.forecastday[2].date}</span>
                                    <img src={forecast.forecastday[2].day.condition.icon} alt="" />
                                    <span>{forecast.forecastday[2].day.maxtemp_c} Deg</span>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default CurrWeather
