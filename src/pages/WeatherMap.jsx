import { useContext } from "react";
import Map from "../components/weather map/Map";
import GeoContext from "../context/changeGeoContext";

function WeatherMap() {
    const { latitude, longitude, searchLat, searchLon } = useContext(GeoContext);

    return (
        <>
            {(latitude && longitude) && <Map lat={searchLat ? searchLat : latitude} lon={searchLon? searchLon : longitude} />}
        </>
    )
}

export default WeatherMap;