import Link from "next/link"
import { Categories } from "../types/categories"
import styles from "../styles/CategoriesCard.module.css"

interface CategoriesProps {
    data: Categories[]
}

const CategoriesCard: React.FC <CategoriesProps> = ({ data }) => {
    return (
        <>
            {data.map((item)=> (
                <Link href={item.url}>
                    <a className={styles.categoriesLink} style={{backgroundImage: `url(${item.background})`}}>
                        <h3 className={styles.categoriesLinkTitle}>{item.title}</h3>
                    </a>
                </Link>
                
            ))}
        </>
    )
}
export default CategoriesCard