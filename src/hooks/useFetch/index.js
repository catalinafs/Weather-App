import { useEffect, useState } from 'react';

export const useFetch = (urlApi) => {
    const [data, setData] = useState({
        name: '',
        temp: '',
        max_temp: '',
        min_temp: '',
        feels_like: '',
        clouds: '',
        humidity: '',
        country: '',
        visibility: '',
        weather_description: '',
        icon_weather: '',
        wind_speed: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const api = await fetch(urlApi);
                const data = await api.json();
                const {name, main, clouds, sys, visibility, weather, wind} = data;
                setLoading(false);
                setData({
                    name: name,
                    temp: main.temp,
                    max_temp: main.temp_max,
                    min_temp: main.temp_min,
                    feels_like: main.feels_like,
                    clouds: clouds.all,
                    humidity: main.humidity,
                    country: sys.country,
                    visibility: visibility,
                    weather_description: weather[0].description,
                    icon_weather: weather[0].icon,
                    wind_speed: wind.speed
                });
            } catch (error) {
                setError(true);
            }
        })();
    }, [urlApi]);

    return { data, error, loading }
}
