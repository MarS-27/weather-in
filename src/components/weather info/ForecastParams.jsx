import ucFirst from "../../services/ucFirst";

function ForecastParams({ apiParamName, param, forecastItems }) {
    const [ paramName, paramUnit ] = param;

    return (
        <div 
            style={forecastItems.length < 4 ? {justifyContent: "flex-start"} : null}
            className="flex_component px-1 py-[10px] rounded-lg forecast-param__bg"
        >
            <div className="flex_component justify-start w-[30%]">
                {paramName && ( 
                    <> 
                        <img
                            className="w-6 h-6 mr-1 max-[540px]:w-4 max-[540px]:h-4"
                            src={require(`../../images/${apiParamName}.svg`)}
                            alt={apiParamName}
                        />
                        <p className="text-sm max-lg:text-xs max-[820px]:text-[10px]">
                            <span className="font-medium">{paramName}, </span>
                            {paramUnit}
                        </p> 
                    </>
                )} 
            </div>
            {forecastItems.map(forecast => (
                apiParamName === "icon" ? (
                    <div key={forecast.dt} className="forecast-icon w-[10%] h-[10%] relative mb-1">
                        <img 
                            className="w-full h-full" 
                            src={require(`../../images/${forecast.weather[0].icon.replace(/.$/, "")}.svg`)}
                            alt={forecast.weather[0].description}
                        />
                        <p className="
                            forecast-icon__description 
                            text-[10px] 
                            font-medium 
                            absolute
                            text-center 
                            hidden
                            w-[200%] 
                            top-[84%] 
                            left-1/2
                            -translate-x-1/2
                            max-[900px]:text-[8px]"
                        >{ucFirst(forecast.weather[0].description)}</p> 
                    </div>
                ) : (
                    <p key={forecast.dt} className="w-[10%] text-sm max-lg:text-xs max-[820px]:text-[10px] text-center">
                        {apiParamName === "speed" ? forecast.wind[apiParamName].toFixed(1) :
                        apiParamName === "dt_txt" ? <span className="font-medium">{forecast[apiParamName].slice(10, 16)}</span> : 
                        Math.round(forecast.main[apiParamName])}
                    </p>
                )
            ))}
        </div>  
    )
}

export default ForecastParams;