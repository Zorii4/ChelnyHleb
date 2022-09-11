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


const Catalog = ({ categories, subCategories }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

    const handleClick = (ind) => {
        ind === activeIndex ? setActiveIndex(null) : setActiveIndex(ind) 
    }
   
    return (
        <div className={styles.container}>
            {!isMobile &&
                <div className={styles.menu}>
                    {categories.map((category, index)=>( 
                        <Accordion
                            key={category.id} 
                            category={category}
                            subCategories={subCategories}
                            index={index}
                            onTitleClick={handleClick}
                            isOpen={activeIndex === index ? true : false}
                        />
                    ))}
                </div>}
            <div className={styles.content}>
                {isMobile ? <WeeksBannerMobile /> : <WeeksNewBanner />}
                {isMobile ? <CategoriesCardMobile />
                : 
                <CategoriesCard isCatalog categories={categories}/>}             
            </div>
        </div>
    )
}

export default Catalog

export async function getServerSideProps() {
    const resCategories = await fetch ("http://localhost:4200/categories")
    const categories = await resCategories.json()
    const resSubCategories = await fetch ("http://localhost:4200/subcategories")
    const subCategories = await resSubCategories.json()
    return { props: { categories, subCategories} }
  }

// export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch (await fetchCategories())
//     await dispatch (await fetchGoods())
  
//     return { props: { } }
//   })