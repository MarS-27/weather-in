import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchWeather } from '../../api/weatherApi';
import { cleanCities } from '../../store/reducers/geolocation';
import CloseButton from '../buttons/CloseButton';
import LocationChangeButton from "../buttons/LocationChangeButton";
import ErrorSearch from '../error/ErrorSearch';
import SearchNoResults from './SearchNoResults';

function SearchResults() {
    const { cities, errorSearch } = useSelector(state => state.reducer.geolocation);
    const dispatch = useDispatch();

    const handleCityChange = (latitude, longitude) => { 
        dispatch(fetchWeather([latitude, longitude]));
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
            search-block__animation
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