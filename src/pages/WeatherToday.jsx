import { useSelector } from 'react-redux';
import BigWeatherCard from '../components/cards/BigWeatherCard';
import DateSearchBlock from '../components/date and search/DateSearch';
import ErrorModal from '../components/error/ErrorModal';
import Loader from '../components/loader/Loader';

function WeatherToday() {
  const { loading, weather, error } = useSelector(state => state.reducer.weather);

  return (
    <main className="max-w-7xl mx-auto">
      {(loading && !weather[0]) && <Loader />}
      {(error && !weather[0]) && <ErrorModal />}
      {(!error && !loading) && (
        <div className=" flex_component px-3 max-md:flex-col-reverse">
          <BigWeatherCard />
          <DateSearchBlock />
        </div>
      )}
    </main>
  );
}

export default WeatherToday;