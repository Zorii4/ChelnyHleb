import { useEffect, useState } from 'react'
import GoodCard from '../../../components/GoodCard'
import WeeksNewBanner from '../../../components/WeeksNewBanner/WeeksNewBanner'
import { fetchAllGoods, fetchAllSubCategories, fetchCategoryById } from '../../../FAKE_API/goods'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { NextThunkDispatch, wrapper } from '../../../store'
import { fetchGoods, fetchGoodsFromCategory } from '../../../store/actions-creators/goods'
import styles from "./Baker.module.css"
import { Goods } from '../../../types/goods'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/router"
import WeeksBannerMobile from "../../../components/mobile/WeeksBannerMobile/WeeksBannerMobile"
import { useMediaQuery } from "react-responsive"

const SubCategory  = () => {
    // const { goods } = useTypedSelector(state => state.goodsFromCategory)  
    const [goods, setGoods] = useState([])
    const [category, setCategory] = useState({})
    const [subCategories, setSubCategories] = useState([])

    const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

    const router = useRouter()
    console.log(router.query);

    useEffect(()=> {
      setGoods(fetchAllGoods())
      setCategory(fetchCategoryById(3))
      setSubCategories(fetchAllSubCategories)
    },[])
    
    if(!category.pic) return (<p>loading</p>)

    return (  
        <div className={styles.container}>
            {isMobile ? (
                <div>
                    <ul className={styles.catMobileList}>
                        {subCategories.map ((item)=> (
                            <li key={item.id} className={styles.subCatItemMobile}>
                                <Link href={`/catalog/${item.category}/${item.subCategory}`}>
                                    <a className={styles.subCatLink}>{item.title}</a>
                                </Link>                                    
                            </li>                          
                        ))}
                    </ul> 
                </div>
                ):(
            <div className={styles.menu}> 
            {category.pic && 
                <div className={styles.linkWrapper}>
                    <Image width={40} height={40} src={category.pic} alt=""></Image>
                    <h3 className={styles.linkTitle}>
                        {category.title}
                    </h3>
                </div>}                    
                <ul>
                    {subCategories.map ((item)=> (
                        <li key={item.id} className={styles.subCatItem}>
                            <Link href={`/catalog/${item.category}/${item.subCategory}`}>
                                <a className={styles.subCatLink}>{item.title}</a>
                            </Link>                                    
                        </li>                          
                    ))}
                </ul> 
            </div>)}

            <div className={styles.content}>
            {isMobile ? <WeeksBannerMobile /> : <WeeksNewBanner />}
                <ul className={styles.cardWrapper}>
                    {goods.map ((item) => (
                        <li key = {item.id} className={styles.cardItem}>
                            <GoodCard key = {item.id} good={item}/>
                        </li>           
                    ))}   
                </ul>          
            </div>
        </div>  
    )
}

export default SubCategory

export async function getServerSideProps( {params} ) {
    // const res = await fetch (`http://localhost:4200/${params}`)
    console.log(params)
    return { props: { } }
}
// ДОРАБОТАТЬ ПОЛУЧЕНИЕ КАТЕГОРИЙ ПО ПАРАМЕТРАМ ИЗ АДРЕСНОЙ СТРОКИ


// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {

//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch (await fetchGoods())
//     await dispatch (await fetchGoodsFromCategory(`${params?.category}`))
//     return { props: { } }
// })
