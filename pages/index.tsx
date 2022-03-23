import type { NextPage } from 'next'
import Link from "next/link"
import Banner from '../components/Banner'
import GoodCard from '../components/GoodCard'
import { useTypedSelector } from "../hooks/useTypeSelector"
import { NextThunkDispatch, wrapper } from '../store'
import { fetchGoods } from '../store/actions-creators/goods'
import styles from "../styles/Index.module.css"
import { fetchBannerData } from '../store/actions-creators/banner'
import WiseBakerBanner from '../components/WiseBakerBanner'
import SesonesBanner from '../components/SesonesBanner'
import { fetchSesonesBanner } from '../store/actions-creators/sesones'
import { fetchCategories } from '../store/actions-creators/categories'
import CategoriesCard from '../components/CategoriesCard'

import CatalogMenu from '../components/CatalogMenu/CatalogMenu'
import { useEffect, useState } from 'react'

import { fetchAllGoods } from '../FAKE_API/goods'
import { Goods } from '../types/goods'


const Home: NextPage = () => {
  // const {goods} = useTypedSelector(state => state.goods)

  const [goods, setGoods] = useState<Goods[]>([])

  useEffect(()=> {
    setGoods(fetchAllGoods())
  },[])

  return (
    <> 

    {/* <CatalogMenu /> */}

      <div className={styles.bannersContainer}>
        <Banner />
        <WiseBakerBanner />
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
      <SesonesBanner/>
      <div className={styles.subtitleWrapper}> 
        <h2 className={styles.subtitle}>Популярные категории</h2>
        <Link href='/catalog'><a className={styles.showAllLink}>Смотреть все</a></Link>
      </div>
      <div className={styles.categoriesWrapper}>
        <CategoriesCard numberOfColumn={4}/>
      </div>      
    </>     
  )
}

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  const dispatch = store.dispatch as NextThunkDispatch
//   await dispatch (await fetchGoods())

await dispatch (await fetchBannerData())

//   await dispatch (await fetchSesonesBanner())
//   await dispatch (await fetchCategories())

  return { props: { } }
})
