import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import WeatherToday from './pages/WeatherToday';
import ForWeek from './pages/WeatherForWeek';
import ForMonth from './pages/WeatherForMonth';
import Footer from './components/footer/Footer';

function App() {
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
