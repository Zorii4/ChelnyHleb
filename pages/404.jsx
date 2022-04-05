import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Custom404.module.css"

const Custom404 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <p className={styles.notFoundTitle}>Страница не найдена</p>   
            </div>
            <span className={styles.notFoundText}>Ошибка 404</span>
            <div className={styles.imageWrapper}>
                <Image src="/img/404.png" width={320} height={200}></Image>
            </div>
            <div className={styles.linkWrapper}>
                <Link href="/">
                    <a className={styles.notFoundLink}>
                        Отправиться за покупками!
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Custom404