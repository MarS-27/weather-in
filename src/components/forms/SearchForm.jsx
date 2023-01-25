import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeolocation } from "../../api/geolocationApi";
import SearchButton from "../buttons/SearchButton";
import Loader from '../loader/Loader';

function SearchForm() {
    const { loadingSearch } = useSelector(state => state.reducer.geolocation);

    const [value, setValue] = useState("");
    
    const dispatch = useDispatch();

    const onFormSubmit = e => {
        e.preventDefault(); 
        dispatch(fetchGeolocation(value));
        resetForm();   
    };

    const resetForm = () => setValue("");

    const cityHandleInput = e => setValue(e.target.value.trimStart());

    const miniLoaderClasses = "absolute text-center w-6 h-6 top-1/2 right-2 -translate-y-1/2"; 

    return (
        <form 
            action=""
            className="flex justify-center items-center mb-5"
            onSubmit={onFormSubmit}
        >
            <div className="w-3/4 relative">
                <input 
                    className="
                        w-full
                        p-2
                        border-solid 
                        border-cyan-900 
                        border-2 
                        rounded-lg
                        bg-zinc-300 
                        bg-opacity-40 
                        outline-gray-200
                        font-regular
                        text-stone-800
                        placeholder:text-stone-500
                    " 
                    type="text" 
                    value={value}
                    placeholder="Enter city name"
                    onChange={cityHandleInput}
                />
                {loadingSearch && <Loader miniLoaderClasses={miniLoaderClasses} />}
            </ div>
            <SearchButton />
        </form>
    );
};

export default SearchForm;