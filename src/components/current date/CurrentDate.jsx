import { useSelector } from 'react-redux';
import getWeatherDate from "../../services/getDate";

function CurrentDate() {
    const { weather } = useSelector(state => state.reducer.weather);

    return (
        <p className=" 
            w-full 
            font-medium 
            self-start 
            text-5xl 
            text-center
            mb-5
            max-md:w-full
            max-[540px]:text-3xl"
        >{getWeatherDate(weather.dt)}</p>
    );
}

export default CurrentDate;