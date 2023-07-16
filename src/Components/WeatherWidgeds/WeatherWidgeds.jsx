import React from 'react';
import { useCelsius } from '../../hooks/useCelsius/useCelsius.js';
import { useKilometers } from '../../hooks/useKilometers/useKilometers.js';
import './styles.css';

export const WeatherWidgeds = ({ feels_like, clouds, humidity, visibility, wind_speed }) => {

  feels_like = useCelsius(feels_like);
  feels_like = Math.trunc(feels_like);
  visibility = useKilometers(visibility);

  return (
    <div className='Container'>
      <div className='Widgets'>
        <div className='WidgetContainer'>
          <div className='Icon_Title'>
            <div className="ContainerIcon">
              <svg xmlns='http://www.w3.org/2000/svg' className='HumidityIcon' viewBox='0 0 512 512' fill='#ffffff'
                width='25px' height='25px'>
                <path
                  d='M265.12 60.12a12 12 0 0 0-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88zM272 412a12 12 0 0 1-11.34-16 11.89 11.89 0 0 1 11.41-8A60.06 60.06 0 0 0 332 328.07a11.89 11.89 0 0 1 8-11.41A12 12 0 0 1 356 328a84.09 84.09 0 0 1-84 84z'
                />
              </svg>
            </div>
            <h3>Humidity</h3>
          </div>

          <h3>{`${humidity}%`}</h3>
        </div>

        <div className='WidgetContainer'>
          <div className='Icon_Title'>
            <div className="ContainerIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill='#ffffff'>
                <path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1 .827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zm2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path>
                <path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4zM2 15h4v2H2z"></path>
              </svg>
            </div>
            <h3>Wind Speed</h3>
          </div>

          <h3>{`${wind_speed}km/h`}</h3>
        </div>

        <div className='WidgetContainer'>
          <div className='Icon_Title'>
            <div className='ContainerIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#ffffff' width='25px' height='25px'>
                <circle cx="256" cy="256" r="64" />
                <path
                  d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
              </svg>
            </div>
            <h3>Visibility</h3>
          </div>

          <h3>{`${visibility}km/h`}</h3>
        </div>

      </div>
      <div className="Widget2">
        <div className='WidgetContainer'>
          <div className='Icon_Title'>
            <div className="ContainerIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#ffffff' width='25px' height='25px'>
                <path
                  d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" />
              </svg>
            </div>
            <h3>Feels Like</h3>
          </div>

          <h3>{`${feels_like}°`}</h3>
        </div>

        <div className='WidgetContainer'>
          <div className='Icon_Title'>
            <div className="ContainerIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#ffffff' width='25px' height='25px'>
                <path
                  d="M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22 18.11-16.53 42.22-28.25 69.18-33.87a16 16 0 0011.37-9.15 156.24 156.24 0 0142.05-56C187.76 91.69 220.5 80 256 80a153.57 153.57 0 01107.14 42.9c24.73 23.81 41.5 55.28 49.18 92a16 16 0 0012.12 12.39C470 237.42 512 270.43 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432z" />
              </svg>
            </div>
            <h3>Clouds</h3>
          </div>

          <h3>{`${clouds}%`}</h3>
        </div>
      </div>
    </div>
  );
}
