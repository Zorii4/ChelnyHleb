import type { NextPage } from 'next'
import { connect } from 'react-redux'
import CategoriesCard from '../components/CategoriesCard'
import { useTypedSelector } from "../hooks/useTypeSelector"
import { RootState } from '../store/reducers'
import styles from "../styles/Catalog.module.css"



const Catalog: NextPage = ({...props}) => {
     const {categories} = useTypedSelector(state => state.categories)
    console.log(props)

    return (
        <div className={styles.container}>
            <div className={styles.menu}>select</div>
            <div className={styles.content}>
                <h1>Каталог товаров</h1>
                <div className={styles.categoriesWrapper}>
                    <CategoriesCard data={categories} />
                </div>   
            </div>
        </div>
    )
}

export default connect((state: RootState) => state)(Catalog);