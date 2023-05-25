import React from 'react';
import { useFetch } from './hooks/useFetch';
import { LoadingPage } from './Components/LoadingPage/index.jsx';
import { ErrorPage } from './Components/ErrorPage/index.jsx';
import { CLIMATE_API_KEY } from './Components/keys.js';
import './GlobalStyles.css';
import { WeatherApp } from './Components/WeatherApp/WeatherApp.jsx';

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
