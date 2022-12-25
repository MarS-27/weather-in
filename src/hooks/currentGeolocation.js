import { useState, useEffect } from "react";

function useCurrentGeolocation () {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    useEffect(() => {
        const succes = (position) => {
            setLatitude(position.coords.latitude) ;
            setLongitude(position.coords.longitude);
        }

         navigator.geolocation.getCurrentPosition(succes);
         
    }, []);

    return {latitude, longitude, setLatitude, setLongitude};
} 

export default useCurrentGeolocation;