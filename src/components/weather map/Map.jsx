import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet-openweathermap/leaflet-openweathermap.css";
import useOpenWeatherMap from "../../hooks/openWeatherMap";

function Map({ lat, lon }) {
    const mapContainer = useOpenWeatherMap(lat, lon);

    return (
        <div 
            ref={el => mapContainer.current = el}
            className="
                map-height  
                w-full 
                card_template 
                animation 
                max-[768px]:w-full
                max-[768px]:mt-0
            "
        />
    )
}

export default Map;