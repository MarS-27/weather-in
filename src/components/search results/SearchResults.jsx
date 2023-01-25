import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../api/weatherApi";
import { fetchWeatherForecast } from "../../api/weatherApiForecast";
import GeoContext from "../../context/changeGeoContext";
import { cleanCities } from "../../store/reducers/geolocation";
import CloseButton from "../buttons/CloseButton";
import LocationChangeButton from "../buttons/LocationChangeButton";
import ErrorSearch from "../error/ErrorSearch";
import SearchNoResults from "./SearchNoResults";

function SearchResults() {
    const { cities, errorSearch } = useSelector(state => state.reducer.geolocation);
    const dispatch = useDispatch();
    const { changeCoords } = useContext(GeoContext);

    const handleCityChange = (latitude, longitude) => { 
        dispatch(fetchWeather([latitude, longitude]));
        dispatch(fetchWeatherForecast([latitude, longitude]));
        changeCoords(latitude, longitude);
        handleClose();
    };

    const handleClose = () => dispatch(cleanCities());
   
    return (
        <div className="
            absolute
            top-[95%]
            flex_component 
            flex-col
            w-11/12 
            bg-gray-200 
            p-3 
            rounded-lg
            search-animation
        ">
            <CloseButton handleClose={handleClose} />
            {(cities === "NOT_FOUND") ? 
                <SearchNoResults /> : 
                cities.map((city, i) => (
                    <LocationChangeButton key={i} city={city} handleCityChange={handleCityChange}/>
                ))
            }
            {errorSearch && <ErrorSearch error={errorSearch} />}
        </div>
    );
};

export default SearchResults;