import { useRef } from "react"
import Image from "next/image"
import styles from "./MenuAccordion.module.css"
import Link from "next/link"

const Accordion  = ({ 
    subCategories,
    category, 
    index, 
    onTitleClick, 
    isOpen
 }) => {

    const elemRef = useRef()

    return (
        <div>
            <div className={styles.menuButtonWrapper} onClick={() => onTitleClick(index)}>
                <div className={styles.buttonMenu}>
                    <Image width={40} height={40} src={category.pic} alt=""></Image>                                                 
                    <p className={styles.menuTitle}>{category.title}</p>
                </div>
                <div>
                    <div className={`${styles.arrayUp} ${isOpen ? styles.arrayDown : null}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 14L12 10L8 14" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>                  
                    </div>
                </div>
            </div>
            <div style={{maxHeight:`${elemRef.current?.offsetHeight}px`}} className={`${styles.contentDefault} ${isOpen && styles.contentActive}`}>
                <div ref={elemRef}>
                    {subCategories.map((subcategory) => (
                    (subcategory.category === category.id)&&
                        <Link key={subcategory.id} href={`/catalog/${category.url}/${subcategory.url}`}>
                            <a className={styles.menuItem}>{subcategory.title}</a>
                        </Link>
                    ))}         
                </div>
            </div>
        </div>
    )
}

export default Accordion