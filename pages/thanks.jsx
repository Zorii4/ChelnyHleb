import { useEffect, useState } from "react"
import { fetchOneOrder } from '../FAKE_API/goods'
import Link from "next/link"
import styles from "../styles/Thanks.module.css"

const Thanks = () => {

    const [order, setOrder] = useState()

    useEffect (()=> {
        setOrder (fetchOneOrder())
    }, [])

    if(!order) return <p>loading</p>

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Спасибо!</h1>
            <p className={styles.thanksText}>Ваш заказ успешно оформлен и будет доставлен,</p>
            <div className={styles.addressDateWrapper}>
                <span className={styles.address}>{order.address}, </span>
                <span className={styles.date}>{order.data}</span>
            </div>
            <Link href="/">
                <a className={styles.backLink}>Вернуться на главную</a>
            </Link>     
        </div>
    )
}

export default Thanks