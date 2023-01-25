import ForecastParams from '../weather info/ForecastParams';
import { FORECAST_WEATHER_PARAMS } from "../../constants";
import getWeatherDate from "../../services/getDate";

function ForecastCard({ date, forecastItems, showMore, setShowMore }) {
    const tempMin = Math.min(...forecastItems.map(forecast => forecast.main.temp_min));
    const tempMax = Math.max(...forecastItems.map(forecast => forecast.main.temp_max));
    const dateAndDay = getWeatherDate(forecastItems[0].dt);
    const forecastParamNames = Object.keys(FORECAST_WEATHER_PARAMS);

    const handleShowMore = () => {
        setShowMore("");
        setShowMore(date);
    };

    return (
        <>
            <div 
                onClick={handleShowMore}
                style={showMore === date ? {marginLeft: "24px", borderColor: "#e5e7eb"} : {marginLeft: "0"}}
                className="
                    card_template
                    flex 
                    flex-col
                    cursor-pointer
                    w-28
                    mt-1
                    first-of-type:mt-0
                    p-1
                    hover:bg-sky-300 
                "
            >
                <div className="
                    flex_component 
                    w-full 
                    border-b 
                    border-solid 
                    border-orange-600"
                >
                    <p className="text-lg text-center">{dateAndDay.slice(0, 3)}</p>
                    <p className="font-medium text-2xl text-center">{dateAndDay.slice(5, 7)}</p>
                    <p className="text-md text-center">{dateAndDay.slice(8, 12)}</p>
                </div>
                <div className="flex_component w-full text-[10px]">
                    <p><span className="font-medium">Max:</span> {Math.round(tempMax)}°C</p>
                    <p><span className="font-medium">Min:</span> {Math.round(tempMin)}°C</p>
                </div>
            </div>
            {showMore === date && 
                <div className="
                    card_template
                    forecast-animation
                    absolute
                    top-0
                    left-[140px]
                    w-[75%]
                    h-full
                    p-2
                    max-[920px]:w-[74%]
                    max-[540px]:relative
                    max-[540px]:w-full
                    max-[540px]:left-0
                    max-[540px]:mt-2
                ">
                    {forecastParamNames.map (apiParamName => (
                        <ForecastParams 
                            key={apiParamName}
                            apiParamName={apiParamName}
                            param={FORECAST_WEATHER_PARAMS[apiParamName]}
                            forecastItems={forecastItems}
                        />
                    ))}
                </div>
            } 
        </>
    );
}

export default ForecastCard;