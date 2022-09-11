import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from 'react-yandex-maps';
import styles from "./MapMobile.module.css"

const MapMobile = () => {
    return (
        <YMaps>
            <div className={styles.wrapper}>
                <Map defaultState={{ center: [55.74173306900025,52.424727499999975], zoom: 16, controls: [] }} className = {styles.mapContainer}>
                <Placemark geometry={[55.74173306900025,52.424727499999975]} />
                <ZoomControl options={{ size: 'small', position: {right: 20, bottom: 40} }}/>
                <GeolocationControl options={{ position: {right: 20, top: 20} }}/>
                </Map>
            </div>
        </YMaps>
    )
}

export default MapMobile