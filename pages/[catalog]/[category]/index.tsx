import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import GoodCard from '../../../components/GoodCard'
import WeeksNewBanner from '../../../components/WeeksNewBanner'
import { fetchAllGoods, fetchAllSubCategories, fetchCategoryById } from '../../../FAKE_API/goods'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { NextThunkDispatch, wrapper } from '../../../store'
import { fetchGoods, fetchGoodsFromCategory } from '../../../store/actions-creators/goods'
import styles from "./Baker.module.css"
import { Goods } from '../../../types/goods'
import Image from "next/image"
import Link from 'next/link'

const SubCategory: React.FC = () => {
    // const { goods } = useTypedSelector(state => state.goodsFromCategory)  
    const [goods, setGoods] = useState<Goods[]>([])
    const [category, setCategory] = useState({})
    const [subCategories, setSubCategories] = useState([])

    useEffect(()=> {
      setGoods(fetchAllGoods())
      setCategory(fetchCategoryById(3))
      setSubCategories(fetchAllSubCategories)
    },[])
    
    if(!category.pic) { <p>loading</p>}

    return (  
        <div className={styles.container}>
            <div className={styles.menuWrapper}>
                <div className={styles.menu}> 
                    {category.pic && 
                        <div className={styles.linkWrapper}>
                            <Image width={40} height={40} src={category.pic}></Image>
                            <h3 className={styles.linkTitle}>
                                {category.title}
                            </h3>
                        </div>}                    
                        <ul>
                            {subCategories.map ((item)=> (
                                <li key={item.id} className={styles.subCatItem}>
                                    <Link href={`http://localhost:3000/catalog/${item.category}/${item.subCategory}`}>
                                        <a className={styles.subCatLink}>{item.title}</a>
                                    </Link>                                    
                                </li>                          
                            ))}
                        </ul> 
                </div>
            </div>    
            <div className={styles.content}>
                <WeeksNewBanner />
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

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {

//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch (await fetchGoods())
//     await dispatch (await fetchGoodsFromCategory(`${params?.category}`))
//     return { props: { } }
// })
