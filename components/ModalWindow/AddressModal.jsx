import styles from "./AddressModal.module.css"
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from 'react-yandex-maps';

const AddressModal = ({close}) => {

    return (
        <YMaps>
            <div className={styles.background} onClick={()=>close(false)}></div>
            <div className={styles.container}>
                <div className={styles.inputWrapper}>
                    <h2 className={styles.title}>Как будете получать заказ?</h2>
                    <form>
                        <div className={styles.radioWrapper}>
                            <input id="radio-1" type="radio" name="radio" value="1" checked />
                            <label htmlFor="radio-1">Доставка</label>
                        </div>
                        <div className={styles.radioWrapper}>
                            <input id="radio-2" type="radio" name="radio" value="2" />
                            <label htmlFor="radio-2">Самовывоз</label>
                        </div>
                    </form>
                    <input className={styles.addressField} type="text" placeholder="Адрес"/>
                    <button className={styles.confirmBtn}>Выбрать</button>
                </div>
                <div className={styles.mapWrapper}>
                    <Map defaultState={{ center: [55.74173306900025,52.424727499999975], zoom: 16, controls: [] }} className = {styles.mapContainer}>
                    <Placemark geometry={[55.74173306900025,52.424727499999975]} />
                    </Map>
                </div>
                <button className={styles.closeBtn} onClick={()=>close(false)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="#304250"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 0.46967C9.82322 0.762563 9.82322 1.23744 9.53033 1.53033L1.53033 9.53033C1.23744 9.82322 0.762563 9.82322 0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967L8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967Z" fill="#304250"/>
                    </svg>
                </button>
            </div>
        </YMaps>
    )
}

export default AddressModal