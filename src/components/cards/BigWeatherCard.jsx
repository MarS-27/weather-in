import ucFirst from "../../services/ucFirst";


function BigWeatherCard({ weather }) {

    return (
        <div 
            className=" 
                flex_component 
                px-3 
                border-solid 
                border-cyan-900 
                border-2 
                rounded-xl 
                p-4 
                mx-auto 
                bg-zinc-300 
                bg-opacity-40 "
            >
            <div>
                <p className=" font-medium mr-3 text-4xl text-center ">{ucFirst(weather?.weather?.[0]?.description)}</p>
                <img 
                    className=" w-52 h-52 m-auto " 
                    src={`/images/${weather?.weather?.[0]?.icon.replace(/.$/, "")}.svg`}
                    alt={weather?.weather?.[0]?.description}
                />  
            </div>
            <div className=" pl-3 self-start text-2xl border-l-2 border-l-solid border-l-orange-600 ">
                <div className="flex_component justify-start mb-3">
                    <img
                        className=" w-16 h-16 mr-3 "
                        src="/images/temperature.svg" 
                        alt="temperature"
                    />
                    <p><span className=" font-medium ">Temperature: </span>{Math.round(weather?.main?.temp)}°C</p>
                </div>
                <div className="flex_component justify-start mb-3">
                    <img
                        className=" w-16 h-16 mr-3 "
                        src="/images/feels-like.svg" 
                        alt="feels-like"
                    />
                    <p><span className=" font-medium ">Feels Like: </span>{Math.round(weather?.main?.feels_like)}°C</p>
                </div>
                <div className="flex_component justify-start mb-3">
                    <img
                        className=" w-16 h-16 mr-3 "
                        src="/images/barometer.svg" 
                        alt="pressure"
                    />
                    <p><span className=" font-medium ">Atmospheric pressure: </span>{weather?.main?.pressure} hPa</p>
                </div>
                <div className="flex_component justify-start mb-3">
                    <img
                        className=" w-16 h-16 mr-3 "
                        src="/images/humidity.svg" 
                        alt="humidity"
                    />
                    <p><span className=" font-medium ">Humidiy: </span>{weather?.main?.humidity}%</p>
                </div>
                <div className="flex_component justify-start">
                    <img
                        className=" w-16 h-16 mr-3 "
                        src="/images/wind_speed.svg" 
                        alt="wind speed"
                    />
                    <p><span className=" font-medium ">Wind speed: </span>{weather?.wind?.speed.toFixed(1)} meter/sec</p>
                </div> 
            </div>
        </div>
             
        
    );
}

export default BigWeatherCard;

