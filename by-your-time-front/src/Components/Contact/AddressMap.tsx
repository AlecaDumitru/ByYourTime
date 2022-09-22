import {useMemo} from 'react';
import React from 'react'
import './AddressMap.css';

// function AddressMap() {
//     const center = useMemo(() => ({lat: 44.46996, lng: 26.08847}), []);
//     const isLoaded =  useLoadScript({googleMapsApiKey:"AIzaSyAlD1cJ8KUuQa-lED47Qr0r0_bMaY84oh8"});
//     if(!isLoaded)return<div>Loading...</div>;
//     return(
//         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//             <MarkerF position={center}/>
//         </GoogleMap>
//     );
// }
import {
    GoogleMap,
    useJsApiLoader,
    MarkerClusterer,
    MarkerF
} from "@react-google-maps/api";



function AddressMap() {
    const center = useMemo(() => ({lat: 44.48065, lng: 26.07142}), []);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAlD1cJ8KUuQa-lED47Qr0r0_bMaY84oh8"
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map: any) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null);
    }, []);
    return isLoaded ? (
        <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <GoogleMap
                id="marker-example"
                mapContainerClassName="map-container"
                zoom={15}
                center={center}
            >
                <MarkerClusterer>
                    {(clusterer) => (
                        <>
                            {(<MarkerF
                                    position={center}
                                    clusterer={clusterer}
                                />
                            )}
                        </>
                    )}
                </MarkerClusterer>
            </GoogleMap>
        </GoogleMap>
    ) : null;
}
export default AddressMap;