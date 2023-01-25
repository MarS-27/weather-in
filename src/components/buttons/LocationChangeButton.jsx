
function LocationChangeButton({ city, handleCityChange }) {

    return (
        <button  
            type="button"
            className="
                font-regular 
                text-xl
                py-2
                mb-1
                last-of-type:mb-0
                w-full
                text-center 
                bg-sky-200
                rounded-lg 
                hover:bg-sky-300 
            " 
            onClick={() => handleCityChange(city.lat, city.lon)}
        >
            {city.name}, {city.state ? `${city.state},` : ""} {city.country}
        </button>
    );
};

export default LocationChangeButton;