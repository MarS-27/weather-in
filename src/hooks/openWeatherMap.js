import { useEffect, useRef } from "react";
import L from "../../node_modules/leaflet/dist/leaflet";
import "../../node_modules/leaflet-openweathermap/leaflet-openweathermap";

const MAP_API_KEY = process.env.REACT_APP_WEATHER_MAP_API;

function useOpenWeatherMap(lat, lon) {
    const mapContainer = useRef(null);

    const container = L.DomUtil.get(mapContainer.current);
    if(container != null){
        container._leaflet_id = null;
    }

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18, 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a>',        
    });

    const humanitarian = L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a> <a href="https://www.hotosm.org/" target="_blank">Tiles courtesy of Humanitarian OpenStreetMap Team</a>'
    });

    const clouds = L.OWM.cloudsClassic({opacity: 0.5, appId: MAP_API_KEY});
    const precipitation = L.OWM.precipitationClassic({opacity: 0.5, appId: MAP_API_KEY});
    const rain = L.OWM.rainClassic({opacity: 0.5, appId: MAP_API_KEY});
    const snow = L.OWM.snow({opacity: 1, appId: MAP_API_KEY});
    const pressure = L.OWM.pressure({opacity: 0.5, appId: MAP_API_KEY});
    const pressurecntr = L.OWM.pressureContour({opacity: 0.5, appId: MAP_API_KEY});
    const temp = L.OWM.temperature({opacity: 0.5, appId: MAP_API_KEY});
    const wind = L.OWM.wind({opacity: 0.5, appId: MAP_API_KEY});

    const city = L.OWM.current({intervall: 15, appId: MAP_API_KEY, imageLoadingUrl: "/images/owmloading.gif"});

    const baseMaps = { "OSM Standard": osm, "OSM Humanitarian": humanitarian };
    const overlayMaps = { 
        "Clouds": clouds,
        "Precipitation": precipitation,
        "Rain": rain, 
        "Snow": snow,
        "Pressure": pressure,
        "Pressure contour": pressurecntr,
        "Temp":  temp,
        "Wind": wind,
    };

    useEffect(() => {
        const map = L.map(mapContainer.current, { center: new L.LatLng(lat, lon), zoom: 10, layers: [osm, city] });
        L.control.layers(baseMaps, overlayMaps).addTo(map); 
        
        return () => {
            map.off();
        };
       
    }, [mapContainer, lat, lon]);

    return mapContainer;
}

export default useOpenWeatherMap;