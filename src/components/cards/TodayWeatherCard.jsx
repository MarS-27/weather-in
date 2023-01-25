import { TODAY_WEATHER_PARAMS } from "../../constants";
import WeatherMainParams from "../weather info/WeatherMainParams";
import WeatherParams from "../weather info/WeatherParams";

function TodayWeatherCard() {
    const weatherParamNames = Object.keys(TODAY_WEATHER_PARAMS);
    
    return (
        <div className=" 
            animation
            flex_component 
            card_template
            px-3 
            p-4 
            mx-auto 
            max-[540px]:flex-col"
        >
            <WeatherMainParams />
            <div className="
                pl-3 
                self-start 
                text-2xl 
                border-l-2 
                border-solid 
                border-orange-600
                max-[540px]:pt-3
                max-[540px]:pl-0
                max-[540px]:border-l-0
                max-[540px]:border-t-2
                max-[540px]:text-lg"
            >
                {weatherParamNames.map (apiParamName => (
                    <WeatherParams 
                        key={apiParamName} 
                        apiParamName={apiParamName} 
                        param={TODAY_WEATHER_PARAMS[apiParamName]}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodayWeatherCard;