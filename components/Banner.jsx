import { BannerData } from "../types/banner"
import styles from "../styles/Banner.module.css"
import { useTypedSelector } from "../hooks/useTypeSelector"
import { useEffect, useState, useRef} from "react"
import { fetchBannerDatas } from "../FAKE_API/goods"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

const Banner = ({item}) => {
    const [bannerData, setBannerData] = useState()
    // const {bannerData, error} = useTypedSelector(state => state.bannerData)
    const isBigScreen = useMediaQuery({ query: '(max-width: 1280px)'})
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1024px)'})
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)'})

    useEffect(()=> {
        setBannerData(fetchBannerDatas())
    },[])

    if (!bannerData) return (<p>loading...</p>)

    return (     
        <div className={styles.container}>
            <div key={item.id} className={styles.wrapper}>
                <div className={styles.wrapperLeft}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.subtitle}>{item.subtitle}</p>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.priceContainer}>
                        <div>
                            <p className={styles.oldPrice}>{item.oldprice.toFixed(2)}₽</p>                                
                            <div className={styles.discountWrapper}>
                                <svg width="20" height="8" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
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
                            <path d="M13 5.99728H5.99707" stroke="#304250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.0004 5.99707C17.4205 5.99707 21.0037 9.58028 21.0037 14.0004C21.0037 18.4205 17.4205 22.0037 13.0004 22.0037C8.58028 22.0037 4.99707 18.4205 4.99707 14.0004" stroke="#304250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.99832 2.99609L5.99707 5.99734" stroke="#304250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.99832 8.99832L5.99707 5.99707" stroke="#304250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.001 14.7506H12.1914V10.833" stroke="#304250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Акция действует с &nbsp;  
                        <span className={styles.durationDate}>{item.duration}</span>
                    </p>
                    {isSmallScreen ?
                        (<Image width={153} height={111} src={item.image}></Image>):
                    isMediumScreen ?                         
                        (<Image width={233} height={181} src={item.image}></Image>):
                    isBigScreen ? 
                        (<Image width={263} height={211} src={item.image}></Image>): 
                        (<Image width={372} height={256} src={item.image}></Image>)}
                </div>
            </div>
            <div className={styles.navWrapper}>
                <p className={styles.bannerFooterText}>
                        Изображение товара может незначительно отличаться от представленных в магазинах. Количество товара ограничено. Цены указаны в рублях.
                </p>
            </div>
                
            
        </div>
        
    )
}

export default Banner