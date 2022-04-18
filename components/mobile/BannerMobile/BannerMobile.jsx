import styles from "./BannerMobile.module.css"
import Image from "next/image"

const BannerMobile = ({ item }) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <div className={styles.newPriceWrapper}>     
                            <div className={styles.newPrice}>{item.newprice.toString().split('.')[0]}</div>
                            <div>
                                <div className={styles.newPriceKop}>{item.newprice.toFixed(2).split('.')[1]} ₽</div>
                                <div className={styles.oldPriceWrapper}>
                                    <span className={styles.oldPriceRub}>{item.oldprice.toString().split('.')[0]},</span>
                                    <span className={styles.oldPricekop}>{item.oldprice.toFixed(2).split('.')[1]}₽</span>
                                </div>
                            </div>
                            
                        </div>
                </div>
            <div className={styles.rightWrapper}>
                <Image width={153} height={111} src={item.mobilmage}></Image>
            </div>
        </div>
    )
}

export default BannerMobile