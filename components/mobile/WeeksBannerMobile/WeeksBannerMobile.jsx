import { useSelector } from "react-redux"
import LittleGoodCard from "../../LittleGoodCard"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import styles from "./WeeksBannerMobile.module.css"
import { useMediaQuery } from "react-responsive"

const WeeksBannerMobile = () => {

    const { goods } = useSelector (state => state.marketGoods)

    const isMobile = useMediaQuery({ query: '(max-width: 375px)'})

    return (
        <div className={styles.container}>
            <div className={styles.bannerTitle}> Новинки этой недели </div>
            <ul className={styles.cardWrapper}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={isMobile ? 125 : 50}
                    grabCursor={true}
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

export default WeeksBannerMobile