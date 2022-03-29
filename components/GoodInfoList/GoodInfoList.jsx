import styles from "./goodInfoList.module.css"

const GoodInfoList = ({nameGoodProperty, valueGoodProperty}) => {
    return (
        <li className={styles.infoDescriptionItem}>
            <div className={styles.infoDescriptionCat}>{nameGoodProperty}</div>
            <div className={styles.infoDescriptionDotted}></div>
            <div className={styles.infoDescriptionText}>{valueGoodProperty}</div>
        </li>
    )
}

export default GoodInfoList