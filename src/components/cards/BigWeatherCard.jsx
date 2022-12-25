import { BIG_CARD_PARAMS } from "../../constants";
import WeatherMainParam from "../weather info/WeatherMainParam";
import WeatherParams from "../weather info/WeatherParams";

function BigWeatherCard() {
    const weatherParamNames = Object.keys(BIG_CARD_PARAMS);
    
    return (
        <div 
            className=" 
                animation
                flex_component 
                px-3 
                border-solid 
                border-cyan-900 
                border-2 
                rounded-xl 
                p-4 
                mx-auto 
                bg-zinc-300 
                bg-opacity-40 
                max-[540px]:flex-col"
            >
            <WeatherMainParam />
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
                {weatherParamNames.map ((apiParamName, i) => (
                    <WeatherParams 
                        key={i} 
                        apiParamName={apiParamName} 
                        param={BIG_CARD_PARAMS[apiParamName]}
                    />
                ))}
            </div>
        </div>
    );
}

export default BigWeatherCard;