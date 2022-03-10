import { BannerData } from "../types/banner"
import styles from "../styles/Banner.module.css"

interface BannerProps {
    data: BannerData[]
  }

const Banner: React.FC <BannerProps> = ({ data }) => {

    return (
        <div className={styles.container}>
            {data.map((item)=> (
                <div className={styles.wrapper}>
                    <div className={styles.wrapperLeft}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <p className={styles.subtitle}>{item.subtitle}</p>
                        <p className={styles.description}>{item.description}</p>
                        <div className={styles.priceContainer}>
                            <div>
                                <p className={styles.oldPrice}>{item.oldprice.toFixed(2)}₽</p>                                
                                <div className={styles.discountWrapper}>
                                    <svg width="20" height="8" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
                                    </svg>
                                    {item.discount}%
                                </div>
                            </div>
                            <div className={styles.newPriceWrapper}>     
                                <div className={styles.newPrice}>{item.newprice.toString().split('.')[0]}</div>
                                <div className={styles.newPriceKop}>{item.newprice.toFixed(2).split('.')[1]}₽</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapperRight}>
                        <p className={styles.durationWrapper}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 5.99728H5.99707" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.0004 5.99707C17.4205 5.99707 21.0037 9.58028 21.0037 14.0004C21.0037 18.4205 17.4205 22.0037 13.0004 22.0037C8.58028 22.0037 4.99707 18.4205 4.99707 14.0004" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.99832 2.99609L5.99707 5.99734" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.99832 8.99832L5.99707 5.99707" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.001 14.7506H12.1914V10.833" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Акция действует с  
                            <span className={styles.durationDate}>{item.duration}</span>
                        </p>
                        <img src={item.image} className={styles.bannerImg}></img>
                    </div>
                </div>
            ))}
            <p className={styles.bannerFooterText}>
                Изображение товара может незначительно отличаться от представленных в магазинах. Количество товара ограничено. Цены указаны в рублях.</p>
        </div>
    )
}

export default Banner