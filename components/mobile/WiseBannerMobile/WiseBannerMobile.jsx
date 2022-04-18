import styles from "./WiseBannerMobile.module.css"
import Link from "next/link"

const WiseBannerMobile = () => {
    return (
        <Link href='/baker'>
            <a>
                <div className={styles.wiseBakerContainer}>
                    <div className={styles.upWrapper}>
                        <h3 className={styles.wiseBakerTitle}>Попробуйте нашу выпечку</h3>
                        <img src='BakerLogo.png'></img>
                    </div>
                    <div className={styles.downWrapper}>
                        <p className={styles.wiseBakerSubtitle}>Сеть кондитерских, кафе и пекарен Мудрый пекарь</p>  
                        <p className={styles.wiseBakerLink}>Подробнее</p>
                    </div>
                </div>        
            </a>
        </Link>
    )
}

export default WiseBannerMobile