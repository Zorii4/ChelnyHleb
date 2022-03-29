import Link from "next/link"
import styles from "../styles/SesonesBanner.module.css"
import { useTypedSelector } from "../hooks/useTypeSelector"
import { useEffect, useState } from "react"
import { fetchSesonesData } from "../FAKE_API/goods"

const SesonesBanner = () => {
    const [sesonesBanner, setSesonesBanner] = useState()
    // const {sesonesBanner} = useTypedSelector(state => state.sesonesData)nm
    
    useEffect (() => {
        setSesonesBanner(fetchSesonesData())
    },[])
    
    if (!sesonesBanner) return (<p>loading</p>)

    return (
        <>
            {sesonesBanner.map((item)=> (
                <div className={styles.sesonesContainer} style={{backgroundImage: `url(${item.background})`}} key={item.id}>
                    <div className={styles.sesonesTopWrapper}>
                        <Link href="#">
                            <a className={styles.sesonesLeftUp}>
                                <h3 className={styles.sesonesTitle}>{item.title}</h3>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.sesonesRightUp}>
                                <h3 className={styles.sesonesTitle}>Домашняя кухня</h3>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.sesonesDownWrapper}>
                        <Link href="#">
                            <a className={styles.sesonesLeftDown}>
                                <h3 className={styles.sesonesTitle}>Хяляль</h3>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.sesonesRightDown}>
                                <h3 className={styles.sesonesTitle}>Сезонные товары</h3>
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SesonesBanner