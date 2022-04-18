import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchAllCategories } from "../../FAKE_API/goods"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import styles from "./catalogMenu.module.css"

const CatalogMenu  = () => {

const [categories, setCategories] = useState([])
const [subCategories, setSubcategories] = useState([])
const [finalCategories, setFinalCategories] = useState([])
const [onMause, setOnMause] = useState(false)

    useEffect(()=> {
        setCategories(fetchAllCategories())

    },[])


    return (
        <div className={styles.container}>
            <ul className={styles.menuList}>
                {categories.map((item) => (
                    <li className={styles.menuItem} key={item.id} 
                        onMouseEnter={()=>!onMause ? setOnMause(!onMause) : setOnMause(onMause)}
                        onMouseLeave={()=>setOnMause(!onMause)}
                    >
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
            {onMause &&
                <div className={styles.subCategory}>подкатегория мудрого пекаря</div>                     
            }
        </div>
    )
}

export default CatalogMenu