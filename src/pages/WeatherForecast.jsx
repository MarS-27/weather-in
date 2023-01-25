import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import GeoContext from "../context/changeGeoContext";
import ForecastCard from "../components/cards/ForecastCard";
import DateSearchBlock from "../components/date and search/DateSearch";
import ErrorModal from "../components/error/ErrorModal";
import Loader from "../components/loader/Loader";
import { fetchWeatherForecast } from "../api/weatherApiForecast";


function Forecast() {
    const { loadingForecast, weatherForecast, errorForecast } = useSelector(state => state.reducer.forecast);
    const { latitude, longitude } = useContext(GeoContext);

    const dateForecast = [...new Set(weatherForecast.map(forecast => forecast.dt_txt.slice(0, 10)))];
        
    const [showMore, setShowMore] = useState("");

    const startForecastDate = dateForecast[0];

    useEffect(() => {
        setShowMore(startForecastDate)
    }, [startForecastDate]);

    const dispatch = useDispatch();  

    useEffect(() => {
        dispatch(fetchWeatherForecast([latitude, longitude]));
    }, [dispatch, latitude, longitude]);

    return (
        <>
            {loadingForecast && <Loader />}
            {errorForecast && <ErrorModal error={errorForecast} />}
            {(!errorForecast && !loadingForecast) && (
                <div className="flex_component max-md:flex-col-reverse">
                    <div className="
                        relative
                        animation
                        flex
                        flex-col
                        w-[70%]
                        mt-5
                        max-md:w-full
                        max-md:mt-0
                    "> 
                        {dateForecast.map(date => ( 
                            <ForecastCard 
                                key={date}
                                date={date}
                                showMore={showMore}
                                setShowMore={setShowMore}
                                forecastItems={weatherForecast.filter(forecastItem => forecastItem.dt_txt.slice(0, 10) === date)}
                            />
                        ))}
                    </div>
                    <DateSearchBlock />
                </div>
            )}
        </>
    )
}

export default Forecast;