import Link from "next/link"
import styles from "../styles/WiseBakerBanner.module.css"

const WiseBakerBanner: React.FC = () => {
    return (
        <Link href='/baker'>
            <a>
                <div className={styles.wiseBakerContainer}>
                    <h3 className={styles.wiseBakerTitle}>Попробуйте нашу выпечку</h3>
                    <p className={styles.wiseBakerSubtitle}>Сеть кондитерских, кафе и пекарен Мудрый пекарь</p>
                    <div className={styles.wiseBakerLinkWrapper}>
                        <img src='BakerLogo.png'></img>
                        <p className={styles.wiseBakerLink}>Подробнее</p>
                    </div>
                </div>        
            </a>
        </Link>
        
    )
}

export default WiseBakerBanner