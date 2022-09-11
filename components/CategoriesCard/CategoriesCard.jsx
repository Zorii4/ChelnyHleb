import Link from "next/link"
import { useEffect, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import { fetchAllGoods, fetchAllCategories } from '../../FAKE_API/goods'
import styles from "./CategoriesCard.module.css"


const CategoriesCard = ({ isCatalog, categories }) => {

    // const {categories} = useTypedSelector(state => state.categories)

    return (
        <ul className={styles.catList}>
            {categories.map((item)=> (
                <li key={item.id} style={{backgroundImage: `url(${item.background})`}}>
                    <Link href={`/catalog/${item.url}`}>
                        <a className={styles.catLink}>
                            <h3 className={styles.catTitle}>{item.title}</h3>
                        </a>
                    </Link>
                </li>                
            ))}
            <style jsx>{`
                li {
                    width: ${isCatalog ? '372px' : '347px'};
                    height: 187px;
                    background-size: cover;
                    background-repeat: no-repeat; 
                    border-radius: 12px; 
                    margin-bottom: 12px;                   
                }
                
                @media (max-width: 1280px) {
                    li {
                        width: ${isCatalog ? '325px' : '372px'}
                    }
                }

                @media (max-width: 1024px) {     
                    li {
                        width: 320px;
                        height: 174px;
                    }
                }

                @media (max-width: 768px) {
                    li {
                        width: 238px;
                        height: 150px;
                    }
                }
            `}</style>
        </ul>
    )
}

export default CategoriesCard