// import logo from '../images/logo.svg';
import React, {  useState } from 'react';
import '../stylesheets/App.css';
import Searcher from './Searcher';
import WeatherResults from './WeatherResults';


const api = {
  key: 'ed3ba494204f4abf63ac338fab10dd22',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const handleFilter = (data) => {
    setCity(data);
    console.log('Se tiene que buscar', data);
  }

  const getDataFromApi = () => {
    return fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        const result = {
          name: data.name,
          country: data.sys.country,
          main: data.weather[0].main,
          temp: data.main.temp
        }
        setWeather(result);
        setCity("");
        });
  };

  console.log(weather);

  return (
    <div className="App">
      <header className="App-header">
        Weather APP
      </header>
      <main>
        <Searcher handleFilter={handleFilter} getDataFromApi={getDataFromApi} city={city}/>
        <WeatherResults weather={weather}/>
      </main>
    </div>
  );
}

export default App;
