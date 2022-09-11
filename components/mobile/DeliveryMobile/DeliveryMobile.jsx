import styles from "./DeliveryMobile.module.css"

const DeliveryMobile = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Выберите способ получения</h1>
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
            <input className={styles.addressInput} type="text" placeholder="Адрес доставки"/>
            <div className={styles.inputWrapper}>
                <input className={styles.dateTimeInput} type="text" placeholder="Дата"/>
                <input className={styles.dateTimeInput} type="text" placeholder="Время"/>
            </div>
            <button className={styles.confirmBtn}>Готово</button>
        </div>
    )   
}

export default DeliveryMobile