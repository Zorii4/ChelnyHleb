import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import CategoriesCard from '../../components/CategoriesCard'
import WeeksNewBanner from '../../components/WeeksNewBanner'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchCategories } from '../../store/actions-creators/categories'
import { fetchGoods } from '../../store/actions-creators/goods'
import styles from "../../styles/Catalog.module.css"


const Catalog: NextPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.menu}>select</div>    
            <div className={styles.content}>
                <WeeksNewBanner />
                <CategoriesCard numberOfColumn={3}/>                
            </div>
        </div>
    )
}

export default Catalog

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch (await fetchCategories())
    await dispatch (await fetchGoods())
  
    return { props: { } }
  })