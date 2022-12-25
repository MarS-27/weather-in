import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './api/weatherApi';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import useCurrentGeolocation from './hooks/currentGeolocation';
import Header from './components/header/Header';
import WeatherToday from './pages/WeatherToday';
import ForWeek from './pages/WeatherForWeek';
import ForMonth from './pages/WeatherForMonth';
import Footer from './components/footer/Footer';
import { fetchWeatherForWeek } from './api/weatherApiForWeek';

function App() {
  const { latitude, longitude } = useCurrentGeolocation();

  const dispatch = useDispatch();  

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchWeather([latitude, longitude]));
      // dispatch(fetchWeatherForWeek([latitude, longitude]));
    };
  }, [dispatch, latitude, longitude]);

  return (
    <div className="bg_container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<WeatherToday />}/>
          <Route path='Week' element={<ForWeek />}/>
          <Route path='Month' element={<ForMonth />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
