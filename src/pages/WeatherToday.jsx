import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../api/weatherApi';
import BigWeatherCard from '../components/cards/BigWeatherCard';
import CurrentDate from '../components/date/CurrentDate';
// import currentWeather, { weatherNow } from './store/reducers/currentWeather';
import useCurrentGeolocation from '../hooks/currentGeolocation';

function WeatherToday() {
    const { loading, weather } = useSelector(state => state.reducer.weather);
    const { latitude, longitude } = useCurrentGeolocation();

    console.log(weather);
  
    const dispatch = useDispatch();

    // const weatherHandler = () => console.log("click");
  
    useEffect(() => {
      if (latitude && longitude) {
        dispatch(fetchWeather([latitude, longitude]));
      };

    }, [dispatch, latitude, longitude])

    return (
        <>
          {loading && <div className="font-bold text-center">LOADING...</div>}
          <div className=" flex_component px-3">
            <BigWeatherCard 
              weather={weather}
            />
            <CurrentDate date={weather.dt} />  
          </div>
        </>
    );
}

export default WeatherToday;