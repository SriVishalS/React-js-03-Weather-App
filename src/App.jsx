import React, { useEffect } from 'react'
import { useState } from 'react'
import CurrWeather from './components/CurrWeather';
const cityAutoCompleteApi = 'http://api.weatherapi.com/v1/search.json?key=d9bb3ad0c1844237be162324232505&q=';
const foreCastApi = (city) => `https://api.weatherapi.com/v1/forecast.json?key=d9bb3ad0c1844237be162324232505&q=${city}&days=5&aqi=no&alerts=no`;
const App = () => {
  const [city, setCity] = useState(''); // input tag State
  const [clicked, setClicked] = useState(false) // Suggestion Div State
  const [suggestion, setSuggestion] = useState([]); // Populate Suggestion Items
  const [currWeather, setCurrWeather] = useState(); // CurrentWeather Component
  const [forecast, setForecast] = useState();
  const [location, setlocation] = useState(''); // Resolves The Currnet Weather Location Bug
  const handleClick = async (clickedItem) => {
    setCity(clickedItem); // update the Input Tag State
    setClicked(true); // Set The Suggestion Div True
    const response = await fetch(foreCastApi(city)) // search for Weather Data Relavent to Div Data
    const data = await response.json()
    setCurrWeather(data.current)
    setForecast(data.forecast)
    setlocation(data.location.name)
  }
  useEffect(() => {
    const fetchCitySuggestion = async () => {
      const responseCities = await fetch(cityAutoCompleteApi + city);
      const data = await responseCities.json();
      const formattedSuggestion = data.map(item =>
        `${item.name}, ${item.region}, ${item.country}`
      )
      setSuggestion(formattedSuggestion);
    };
    if (!clicked && city.length > 2) {
      fetchCitySuggestion();
    } else {
      setSuggestion([]);
      setClicked(false)
    }
  }, [city]);
  return (
    <div className='App'>
      <div className="header">React Weather Report For The Week</div>
      <div className="AppContainer">
        <input type="text" name="" id="" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Search a City !' />
        <div className='sugCont'>{suggestion.map((item) => (
          <div className='suggestionItem' onClick={() =>
            handleClick(item)}>
            {item}
          </div>
        ))}
        </div>
        {currWeather && <CurrWeather current={currWeather} city={location} forecast={forecast} />}
      </div>
    </div>
  )
}
export default App