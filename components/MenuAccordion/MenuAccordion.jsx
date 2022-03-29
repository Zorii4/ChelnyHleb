import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./MenuAccordion.module.css"

const Accordion  = ({pic, title, subTitle}) => {

    const [accordIsActive, setAccordIsActive] = useState(false)

    return (
        <>
            <div className={styles.menuButtonWrapper} onClick={()=>setAccordIsActive(!accordIsActive)}>
                <div className={styles.buttonMenu}>
                    <Image width={40} height={40} src={pic}></Image>                                                 
                    <p className={styles.menuTitle}>{title}</p>
                </div>
                <div>
                    <div>
                        {accordIsActive ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 14L12 10L8 14" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg> 
                            ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10L12 14L16 10" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            )
                        }
                    </div>
                </div>
            </div>    
            {accordIsActive && 
                <div>
                    {subTitle}
                </div>
            }
        </>
    )
}

export default Accordion