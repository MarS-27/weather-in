import React, { useEffect, useState } from 'react';
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
import Forecast from './pages/WeatherForecast';
import WeatherMap from './pages/WeatherMap';
import Footer from './components/footer/Footer';
import ErrorModal from './components/error/ErrorModal';
import GeoContext from './context/changeGeoContext';
import Loader from './components/loader/Loader';

function App() {
  const { latitude, longitude } = useCurrentGeolocation();

  const dispatch = useDispatch();  

  const [searchLat, setSearchLat] = useState();
  const [searchLon, setSearchLon] = useState();
  
  const changeCoords = (lat, lon) => {
      setSearchLat(lat);
      setSearchLon(lon);
  };

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchWeather([latitude, longitude]));
    };
  }, [dispatch, latitude, longitude]);

  return (
    <div className="bg_container">
      <BrowserRouter>
        <Header />
        <GeoContext.Provider value={{latitude, longitude, searchLat, searchLon, changeCoords}}>
          <main className="max-w-7xl p-3 mx-auto w-full">
            <Routes>
              <Route path="/" element={<WeatherToday />} />
              <Route path="Forecast" element={<Forecast />} />
              <Route path="Map" element={<WeatherMap />} loader={<Loader />} />
              <Route path="*" element={<ErrorModal error={"Page Not Found"} />} />
            </Routes>
          </main>
        </GeoContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
