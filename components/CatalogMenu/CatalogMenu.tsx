import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchAllCategories } from "../../FAKE_API/goods"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import styles from "./catalogMenu.module.css"

const CatalogMenu: React.FC = () => {

const [categories, setCategories] = useState([])

    useEffect(()=> {
    setCategories(fetchAllCategories())
    },[])


    return (
        <div className={styles.container}>
            <ul className={styles.menuList}>
                {categories.map((item) => (
                    <li className={styles.menuItem}>
                        <Link href="#">
                            <a className={styles.categoryLink}>
                                <div className={styles.linkWrapper}>
                                    <Image width={40} height={40} src={item.pic}></Image>
                                    <h3 className={styles.linkTitle}>
                                        {item.title}
                                    </h3>
                                </div>                                
                            </a>
                        </Link>                      
                    </li>
                    
                ))}
            </ul>
            <div>
                <p id="idi" className={styles.subCategory}>подкатегория мудрого пекаря</p>
            </div>
        </div>
    )
}

export default CatalogMenu