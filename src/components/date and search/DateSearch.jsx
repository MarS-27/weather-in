import { useSelector } from 'react-redux';
import CurrentDate from "../current date/CurrentDate";
import SearchForm from "../forms/SearchForm";
import SearchResults from "../search results/SearchResults";

function DateSearchBlock() {
    const { cities, errorSearch } = useSelector(state => state.reducer.geolocation);
    const { weather } = useSelector(state => state.reducer.weather);

    return (
        <>
            {weather.dt && (
                <div 
                    className="
                        relative 
                        flex 
                        flex-col 
                        self-start 
                        pl-3 
                        pt-3 
                        max-md:self-center 
                        max-md:pl-0 
                        max-md:pt-0
                    "
                >
                    <>
                        <CurrentDate />
                        <SearchForm  />  
                    </>   
                    {(cities[0] || errorSearch) && <SearchResults />}
                </div>
            )}
        </>
    );
};

export default DateSearchBlock;