import { useMediaQuery } from "react-responsive"
import Link from "next/link"
import Banner from '../components/Banner'
import GoodCard from '../components/GoodCard'
import { useTypedSelector } from "../hooks/useTypeSelector"
import { NextThunkDispatch, wrapper } from '../store'
import { fetchGoods } from '../store/actions-creators/goods'
import styles from "../styles/Index.module.css"
import { fetchBannerData } from '../store/actions-creators/banner'
import WiseBakerBanner from '../components/WiseBakerBanner'
import SesonesBanner from '../components/SesonesBanner/SesonesBanner'
import { fetchSesonesBanner } from '../store/actions-creators/sesones'
import { fetchCategories } from '../store/actions-creators/categories'
import CategoriesCard from '../components/CategoriesCard/CategoriesCard'
import SesonesBannerMobile from '../components/mobile/SesonesBannerMobile/SesonesBannerMobile'
import CatalogMenu from '../components/CatalogMenu/CatalogMenu'
import { useEffect, useState, useRef } from 'react'
import CategoriesCardMobile from '../components/mobile/CategoriesCardMobile/CategoriesCardMobile'
import { fetchAllGoods, fetchBannerDatas } from '../FAKE_API/goods'
import { Goods } from '../types/goods'
import { Swiper, SwiperSlide } from "swiper/react"
import  { Navigation, Autoplay } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import Layout from "../components/Layout"
import { useSelector } from "react-redux"
import BannerMobile from '../components/mobile/BannerMobile/BannerMobile'
import WiseBannerMobile from '../components/mobile/WiseBannerMobile/WiseBannerMobile'

const Home = () => {
  // const {goods} = useTypedSelector(state => state.goods)

  const { goods } = useSelector (state => state.marketGoods)

  // const [goods, setGoods] = useState([])
  const [bannerData, setBannerData] = useState()

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

  useEffect(()=> {
    // setGoods(fetchAllGoods())
    setBannerData(fetchBannerDatas())
  },[])

  if (!bannerData) return (<p>loading...</p>)

  return (
    <> 

     {/* <CatalogMenu /> */}

      <div className={styles.bannersContainer}>
        <Swiper     
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
          speed={500}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {bannerData.map((item) => (
            <SwiperSlide key={item.id}>
              {isMobile ? (<BannerMobile key={item.id} item={item}/>) : (<Banner key={item.id} item={item}/>)}            
            </SwiperSlide> ))
          }
          {!isSmallScreen && 
            <div className={styles.navBtnContainer}>
              <div className={styles.swiperBtn} ref={navigationPrevRef}>
                  <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L1.3698 7.5547C1.14587 7.2188 1.14587 6.7812 1.3698 6.4453L5 1" stroke="#304250" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
              </div>
              <div className={styles.swiperBtn} ref={navigationNextRef}>
                  <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4.6302 6.4453C4.85413 6.7812 4.85413 7.2188 4.6302 7.5547L1 13" stroke="#304250" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
              </div>
            </div>
          }
        </Swiper>
        {isMobile ? <WiseBannerMobile /> : <WiseBakerBanner />}
      </div>
      <div className={styles.subtitleWrapper}> 
        <h2 className={styles.subtitle}>Акция</h2>
        <Link href='#'><a className={styles.showAllLink}>Смотреть все</a></Link>
      </div>
      <ul className={styles.cardWrapper}>
        {goods.map ((item) =>  
          item.discount && (
            <li className={styles.cardItem} key={item.id}>            
              <GoodCard good={item}/>            
            </li>
          ))}   
      </ul>       
      <div className={styles.subtitleWrapper}> 
        <h2 className={styles.subtitle}>Популярное</h2>
        <Link href='#'><a className={styles.showAllLink}>Смотреть все</a></Link>
      </div>
      <ul className={styles.cardWrapper}>
        {goods.map ((item) => 
          item.popular && (
          <li className={styles.cardItem} key={item.id}>
            <GoodCard good={item}/>
          </li>           
        ))}   
      </ul>
      {isMobile ? <SesonesBannerMobile /> : <SesonesBanner/>}      
      <div className={styles.subtitleWrapper}> 
        <h2 className={styles.subtitle}>Популярные категории</h2>
        <Link href='/catalog'><a className={styles.showAllLink}>Смотреть все</a></Link>
      </div>
      <div className={styles.categoriesWrapper}>
        {isMobile ? <CategoriesCardMobile /> : <CategoriesCard />}
      </div>      
    </>     
  )
}

export default Home;

// export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
//   const dispatch = store.dispatch as NextThunkDispatch
//   await dispatch (await fetchGoods())

// await dispatch (await fetchBannerData())

//   await dispatch (await fetchSesonesBanner())
//   await dispatch (await fetchCategories())

//   return { props: { } }
// })
