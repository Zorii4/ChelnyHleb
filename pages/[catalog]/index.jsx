import { useRouter } from 'next/router'
import CategoriesCard from '../../components/CategoriesCard'
import WeeksNewBanner from '../../components/WeeksNewBanner'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchCategories } from '../../store/actions-creators/categories'
import { fetchGoods } from '../../store/actions-creators/goods'
import styles from "../../styles/Catalog.module.css"
import { useEffect, useState } from "react"
import { fetchAllCategories, fetchAllSubCategories, fetchCategoryById } from '../../FAKE_API/goods'
import Image from "next/image"
import Accordion from "../../components/MenuAccordion/MenuAccordion"


const Catalog = () => {

    const [categories, setCategories] = useState()
    const [subCategories, setSubCategories] = useState()
   

    useEffect(()=> {
        setCategories(fetchAllCategories())
        setSubCategories(fetchAllSubCategories())
    },[])

    if(!categories && !subCategories) return <h1>loading</h1>

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {categories.map((category)=>( 
                    <Accordion
                        key={category.id} 
                        pic={category.pic}
                        title={category.title} 
                        subTitle={subCategories.map((subcategory) => (subcategory.categoryId === category.id ? <div className={styles.menuItem}>{subcategory.title}</div> : ""))} 
                    />
                ))}
                </div>
            <div className={styles.content}>
                <WeeksNewBanner />
                <CategoriesCard numberOfColumn={3}/>                
            </div>
        </div>
    )
}

export default Catalog

// export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch (await fetchCategories())
//     await dispatch (await fetchGoods())
  
//     return { props: { } }
//   })