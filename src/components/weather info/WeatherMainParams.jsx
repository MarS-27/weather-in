import { useSelector } from "react-redux";
import ucFirst from "../../services/ucFirst";

function WeatherMainParams() {
    const { weather } = useSelector(state => state.reducer.weather);

    return (
        <div>
            <p className="
                font-medium 
                mr-3 
                text-4xl 
                text-center 
                max-[540px]:mr-0 
                max-[540px]:text-2xl"
            >{ucFirst(weather?.weather?.[0]?.description)}</p>
            <img 
                className="w-52 h-52 m-auto max-[540px]:w-44 max-[540px]:h-44" 
                src={require(`../../images/${weather?.weather?.[0]?.icon.replace(/.$/, "")}.svg`)}
                alt={weather?.weather?.[0]?.description}
            />  
        </div>
    );
}

export default WeatherMainParams;