import React from 'react';
import { CLIMATE_API_KEY } from './Components/keys.js';
import { ErrorPage } from './Components/ErrorPage/index.jsx';
import { LoadingPage } from './Components/LoadingPage/index.jsx';
import { useFetch } from './hooks/useFetch/useFetch.js';
import { WeatherApp } from './Components/WeatherApp/WeatherApp.jsx';
import './GlobalStyles.css';

const App = () => {
  const city_name = 'Barranquilla';
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${CLIMATE_API_KEY}`;

  const { data, loading, error } = useFetch(urlApi);

  if (loading) return (<><LoadingPage /></>);
  if (error) return (<><ErrorPage /></>);

  return (
    <>
      <WeatherApp data={data} />
    </>
  );
}

export default App;
