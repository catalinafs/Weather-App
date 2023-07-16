import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar.jsx';
import { useCapitalize } from '../../hooks/useCapitalize/useCapitalize.js';
import { useCelsius } from '../../hooks/useCelsius/useCelsius.js';
import { useIconWeather } from '../../hooks/useIconWeather/useIconWeather.js';
import { WeatherWidgeds } from '../WeatherWidgeds/WeatherWidgeds.jsx';
import './styles.css';

export const WeatherApp = ({ data }) => {
  let {
    name,
    country,
    temp,
    max_temp,
    min_temp,
    feels_like,
    clouds,
    humidity,
    visibility,
    weather_description,
    wind_speed,
    icon_weather
  } = data;

  temp = useCelsius(temp);
  temp = Math.trunc(temp);

  max_temp = useCelsius(max_temp);
  max_temp = Math.trunc(max_temp);

  min_temp = useCelsius(min_temp);
  min_temp = Math.trunc(min_temp);

  weather_description = useCapitalize(weather_description);

  let weather_icon = useIconWeather(icon_weather);

  return (
    <main>
      <div className='ContainerApp PhoneApp'>

        <div className='SearchBar'>
          <h2>Weather<span>App</span></h2>
          <SearchBar />
        </div>

        <div className="ContainerInformation">
          {/* City, Country - Today, Month */}
          <div className="CityCountryDay">
            <h1>{`${name}, ${country}`}</h1>
            <h2>Today, Month</h2>
          </div>

          {/* Icon Weather - Max-Min temperature */}
          <div className="MainDescription">
            <div className="MainWeather">
              <div className='Max-Min_Icon_Description'>
                <div className="Max_Min">
                  <h3>{`Max: ${max_temp}°`}</h3>
                  <h3>{`Min: ${min_temp}°`}</h3>
                </div>

                <div className="Icon-Weather_Description">
                  <img src={weather_icon} alt='Image' />
                  <h2>{weather_description}</h2>
                </div>
              </div>

              <h2>{`${temp}°`}</h2>
            </div>
          </div>

          {/* weather widgeds */}
          <WeatherWidgeds
            feels_like={feels_like}
            clouds={clouds}
            humidity={humidity}
            visibility={visibility}
            wind_speed={wind_speed}
          />
        </div>
      </div>
    </main>
  );
}
