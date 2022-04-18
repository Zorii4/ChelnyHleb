import styles from "./SesonesBannerMobile.module.css"
import { useEffect, useState } from "react"
import { fetchSesonesData } from "../../../FAKE_API/goods"
import Link from "next/link"

const SesonesBannerMobile = () => {
    const [sesonesBanner, setSesonesBanner] = useState()
    
    useEffect (() => {
        setSesonesBanner(fetchSesonesData())
    },[])
    
    if (!sesonesBanner) return (<p>loading</p>)

    return (
        <>
            {sesonesBanner.map((item)=> (
                <ul className={styles.sesonesList}>
                    <li className={styles.sesonesItemeLeftUp} style={{backgroundImage: `url(${item.backgroundMobile})`}}> 
                        <Link href="#">
                            <a className={styles.sesonesLink}>
                                <h3 className={styles.sesonesTitle}>{item.title}</h3>
                                <p className={styles.description} >{item.description}</p>
                            </a>    
                        </Link>
                        <style jsx>
                        {`
                            li {
                                background-repeat: no-repeat;
                                background-size: cover;
                                width: 219px;
                                height: 219px;
                                border-radius: 10px;
                                padding: 10px;
                            }

                            @media (max-width: 375px) {
                               li {
                                    width: 165px;
                                    height: 165px;
                                } 
                            }
                        `}         
                        </style>
                    </li>
                    <li className={styles.sesonesItemRightUp}> 
                        <Link href="#">
                            <a className={styles.sesonesLink}>
                                <h3 className={styles.sesonesTitle}>Домашняя кухня</h3>
                                <p className={styles.description} >{item.description}</p>
                            </a>  
                        </Link>
                    </li>
                    <li className={styles.sesonesItemLeftDown}> 
                        <Link href="#">
                            <a className={styles.sesonesLink}>
                                <h3 className={styles.sesonesTitle}>Хяляль</h3>
                                <p className={styles.description} >{item.description}</p>
                            </a>
                        </Link>
                    </li>
                    <li className={styles.sesonesItemRightDown}> 
                        <Link href="#">
                            <a className={styles.sesonesLink}>
                                <h3 className={styles.sesonesTitle}>Сезонные товары</h3>
                                <p className={styles.description} >{item.description}</p>
                            </a>
                        </Link>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default SesonesBannerMobile