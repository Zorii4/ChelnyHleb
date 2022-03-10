import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link"
import Banner from '../components/Banner'
import GoodCard from '../components/GoodCard'
import { useTypedSelector } from "../hooks/useTypeSelector"
import { NextThunkDispatch, wrapper } from '../store'
import { fetchGoods } from '../store/actions-creators/goods'
import styles from "../styles/Index.module.css"
import { fetchBannerData } from '../store/actions-creators/banner'

const Home: NextPage = () => {
  
  const {goods} = useTypedSelector(state => state.goods)
  const {bannerData, error} = useTypedSelector(state => state.bannerData)

  return (
    <>
      <Banner data={bannerData}/>
      <h2 className={styles.subtitle}>Акция</h2>
      <Link href="#">Смотреть все</Link>
      <ul className={styles.cardWrapper}>
        {goods.map ((item) => (
          <li className={styles.cardItem}>
            <GoodCard key = {item.id} good = {item}/>
          </li>           
        ))}   
      </ul>
    </>     
  )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch (await fetchGoods())
  await dispatch (await fetchBannerData())

  return { props: { } }
})
