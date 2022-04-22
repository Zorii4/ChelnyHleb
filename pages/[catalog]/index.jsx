import { useRouter } from 'next/router'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard'
import WeeksNewBanner from '../../components/WeeksNewBanner/WeeksNewBanner'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchCategories } from '../../store/actions-creators/categories'
import { fetchGoods } from '../../store/actions-creators/goods'
import styles from "../../styles/Catalog.module.css"
import { useEffect, useState } from "react"
import { fetchAllCategories, fetchAllSubCategories, fetchCategoryById } from '../../FAKE_API/goods'
import Image from "next/image"
import Accordion from "../../components/MenuAccordion/MenuAccordion"
import { useMediaQuery } from "react-responsive"
import WeeksBannerMobile from "../../components/mobile/WeeksBannerMobile/WeeksBannerMobile"
import CategoriesCardMobile from '../../components/mobile/CategoriesCardMobile/CategoriesCardMobile'


const Catalog = () => {

    const [categories, setCategories] = useState()
    const [subCategories, setSubCategories] = useState()
    const [activeIndex, setActiveIndex] = useState(null)

    const isMobile = useMediaQuery({ query: '(max-width: 480px)'})


    useEffect(()=> {
        setCategories(fetchAllCategories())
        setSubCategories(fetchAllSubCategories())
    },[])

    const handleClick = (ind) => {
        ind === activeIndex ? setActiveIndex(null) : setActiveIndex(ind) 
    }
   
    if(!categories && !subCategories) return <h1>loading</h1>

    return (
        <div className={styles.container}>
            {!isMobile &&
                <div className={styles.menu}>
                    {categories.map((category, index)=>( 
                        <Accordion
                            key={category.id} 
                            pic={category.pic}
                            title={category.title} 
                            subTitle={subCategories.map((subcategory) => (subcategory.categoryId === category.id ? <div className={styles.menuItem}>{subcategory.title}</div> : ""))} 
                            index={index}
                            onTitleClick={handleClick}
                            isOpen={activeIndex === index ? true : false}
                        />
                    ))}
                </div>}
            <div className={styles.content}>
                {isMobile ? <WeeksBannerMobile /> : <WeeksNewBanner />}
                {isMobile ? <CategoriesCardMobile /> : <CategoriesCard isCatalog />}             
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