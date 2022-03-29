import { Goods, GoodsState } from "../types/goods"
import styles from "../styles/GoodsCard.module.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { fetchGoodById } from "../FAKE_API/goods"
import { useDispatch, useSelector } from "react-redux"

const GoodCard = ({ good }) => {

    const [intiger, float] = good.newprice.toString().split('.')

    const addToBasket = (id) => {

        let g = fetchGoodById(id)
        console.log(g)

    }

    return (
        <>  
            <div className={styles.discountLikeContainer}>
                {good.discount &&
                (<div className={styles.discountProcent}>
                    <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
                    </svg>
                    {good.discount}%
                </div>)}
                <button>Like</button>
            </div>
            <Link href={`/catalog/${good.category}/${good.subCategory}/${good.finalCategory}/${good.id}`}>
                <a>
                    <div className={styles.imageContainer}><Image width={240} height={166} src={good.image}></Image></div>
                                                    
                    <div>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99984 0.666504L7.72401 3.62672L11.0721 4.35175L8.7896 6.90629L9.13469 10.3146L5.99984 8.93317L2.86498 10.3146L3.21007 6.90629L0.927536 4.35175L4.27567 3.62672L5.99984 0.666504Z" fill="#FDC000"/>
                        </svg>
                        {good.rate}
                    </div>
                </a>
            </Link> 
            <h4 className={styles.goodCardTitle}>{good.title}</h4>
            <div className={styles.goodOldPrice}>{good.oldprice}₽</div>
            <div className={styles.goodBasketContainer}>
                <div className={styles.goodNewPiceWrapper}>
                    <div className={styles.goodNewPriceRub}>{intiger}</div>
                    <div className={styles.goodNewPriceKop}>{float}₽</div>
                </div>
                <button className={styles.orderButton} onClick={()=>addToBasket(good.id)}>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.71493 7.45117L5.96456 4.07617H3.79443" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.69807 16.6874L6.71582 7.45117H20.9561C21.6727 7.45117 22.2059 8.11155 22.0563 8.81242L20.3666 16.6874C20.2552 17.2061 19.7973 17.5762 19.2663 17.5762H9.7972C9.26732 17.5762 8.80945 17.2061 8.69807 16.6874Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.4376 21.2621C19.1023 21.2621 18.8301 21.5342 18.8334 21.8696C18.8334 22.2049 19.1055 22.4771 19.4409 22.4771C19.7762 22.4771 20.0484 22.2049 20.0484 21.8696C20.0467 21.5342 19.7746 21.2621 19.4376 21.2621" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.2099 21.2621C9.87459 21.2621 9.60243 21.5342 9.60567 21.8696C9.60405 22.2049 9.87621 22.4771 10.2115 22.4771C10.5469 22.4771 10.819 22.2049 10.819 21.8696C10.819 21.5342 10.5469 21.2621 10.2099 21.2621" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0002 6.6665V17.3332" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.3332 12.0002H10.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>   
        </>
    )
}

export default GoodCard