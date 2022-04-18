import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import  { Navigation } from "swiper"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import styles from "./WeeksNewBanner.module.css"
import LittleGoodCard from "../LittleGoodCard"
import 'swiper/css';
import 'swiper/css/navigation';
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"

const WeeksNewBanner = () => {

    // const {goods} = useTypedSelector(state => state.goods)  

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const { goods } = useSelector (state => state.marketGoods)

    const isMediumScreen = useMediaQuery({ query: '(max-width: 1024px)'})
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)'})
    
    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.bannerTitle}> Новинки 
                    <span> &nbsp;
                        <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9.69008C12.5882 20.77 21.4118 20.77 31.6011 9.69008C40.8235 -0.56335 51.8529 -0.563365 62 9.69008" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M2 9.69008C12.5882 20.77 21.4118 20.77 31.6011 9.69008C40.8235 -0.56335 51.8529 -0.563365 62 9.69008" stroke="#FEFEFE" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </span> &nbsp;
                    этой недели
                </div>
                <div className={styles.navBtnContainer}>
                    <div className={styles.swiperBtn} ref={navigationPrevRef}>
                        <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L1.3698 7.5547C1.14587 7.2188 1.14587 6.7812 1.3698 6.4453L5 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={styles.swiperBtn} ref={navigationNextRef}>
                        <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4.6302 6.4453C4.85413 6.7812 4.85413 7.2188 4.6302 7.5547L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div> 
            </div>
            <ul className={styles.cardWrapper}>
                <Swiper
                    slidesPerView={isSmallScreen ? 2 : isMediumScreen ? 3 : 4}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                >
                {goods.map ((item) => 
                    (item.new && 
                        <SwiperSlide>
                            <li key={item.id} className={styles.cardList}>
                                <LittleGoodCard good={item} />
                            </li>
                        </SwiperSlide>                            
                    ))}
                </Swiper>  
            </ul>             
        </div>
    )
}

export default WeeksNewBanner