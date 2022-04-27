import styles from "./AddressModal.module.css"
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const AddressModal = () => {
    return (
        <YMaps>
            <div className={styles.background}>
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
                        <Map defaultState={{ center: [55.74173306900025,52.424727499999975], zoom: 16 }} style={{width:"100%", height:"100%"}}>
                        <Placemark geometry={[55.74173306900025,52.424727499999975]} />
                        </Map>
                    </div>
                </div>
            </div>
        </YMaps>
    )
}

export default AddressModal