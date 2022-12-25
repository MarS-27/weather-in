import { useSelector } from 'react-redux';

function WeatherParams({ apiParamName, param }) {
    const { weather } = useSelector(state => state.reducer.weather);

    const [ paramName, paramUnit ] = param;
    
    return (
        <div className="flex_component justify-start mb-3 last-of-type:mb-0">
            <img
                className="w-16 h-16 mr-3 max-[540px]:w-12 max-[540px]:h-12"
                src={`/images/${apiParamName}.svg`} 
                alt={apiParamName}
            />
            <p>
                <span className="font-medium">{paramName}: </span> 
                {apiParamName === "speed" ? weather?.wind?.[apiParamName].toFixed(1) : Math.round(weather?.main?.[apiParamName])}
                {paramUnit}
            </p>
        </div>
    );
}

export default WeatherParams;