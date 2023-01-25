import { useSelector } from 'react-redux';
import TodayWeatherCard from '../components/cards/TodayWeatherCard';
import DateSearchBlock from '../components/date and search/DateSearch';
import ErrorModal from '../components/error/ErrorModal';
import Loader from '../components/loader/Loader';

function WeatherToday() {
  const { loading, weather, error } = useSelector(state => state.reducer.weather);
  
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorModal error={error} />}
      {(!error && !loading && weather.cod) && (
        <div className="flex_component max-md:flex-col-reverse">
          <TodayWeatherCard />
          <DateSearchBlock />
        </div>
      )}
    </>
  );
}

export default WeatherToday;