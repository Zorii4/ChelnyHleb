import { Goods, GoodsState } from "../types/goods"
import styles from "../styles/GoodsCard.module.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { fetchGoodById } from "../FAKE_API/goods"
import { useDispatch } from "react-redux"
import { addToBasket } from "../store/reducers/basketReducer"
import { addFavorities } from "../store/reducers/goodsReducer"
import { useMediaQuery } from "react-responsive"

const GoodCard = ({ good }) => {

    const [intiger, float] = good.newprice.toString().split('.')
    const dispatch = useDispatch()

    const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

    const handleAddToBasket = (good) => {
        dispatch(addToBasket(good))
    }

    const handleAddFav = (good) => {
        return dispatch(addFavorities(good))
    }

    return (
        <div className={styles.cardWrapper}>  
            <div className={styles.discountLikeContainer}>
                {good.discount ?
                    (<div className={styles.discountProcent}>
                        <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
                        </svg>
                        {good.discount}%
                    </div>) : <div></div>}
                <button className={styles.likeButton} onClick={()=>handleAddFav(good)}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {good.like ? 
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.08 1.33203C14.7258 1.33203 16.5 3.81536 16.5 6.12786C16.5 10.822 9.13417 14.6654 9 14.6654C8.86583 14.6654 1.5 10.822 1.5 6.12786C1.5 3.81536 3.27417 1.33203 5.92 1.33203C7.4325 1.33203 8.42583 2.0862 9 2.75786C9.57417 2.0862 10.5675 1.33203 12.08 1.33203Z" fill="#E50029" stroke="#E50029" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        : 
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.08 1.33203C14.7258 1.33203 16.5 3.81536 16.5 6.12786C16.5 10.822 9.13417 14.6654 9 14.6654C8.86583 14.6654 1.5 10.822 1.5 6.12786C1.5 3.81536 3.27417 1.33203 5.92 1.33203C7.4325 1.33203 8.42583 2.0862 9 2.75786C9.57417 2.0862 10.5675 1.33203 12.08 1.33203Z" stroke="#B3BFCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
                    </svg>
                </button>
            </div>
            <Link href={`/catalog/${good.category}/${good.subCategory}/${good.finalCategory}/${good.id}`}>
                <a>
                    <div className={styles.imageContainer}>
                        {isMobile ? 
                            <Image width={150} height={104} src={good.image}></Image> : 
                            <Image width={240} height={166} src={good.image}></Image>}
                    </div>                            
                    <div className={styles.rateNumber}>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99984 0.666504L7.72401 3.62672L11.0721 4.35175L8.7896 6.90629L9.13469 10.3146L5.99984 8.93317L2.86498 10.3146L3.21007 6.90629L0.927536 4.35175L4.27567 3.62672L5.99984 0.666504Z" fill="#FDC000"/>
                        </svg>
                        {good.rate}
                    </div>
                </a>
            </Link>
            <div className={styles.bottomWrapper}>
                <h4 className={styles.goodCardTitle}>{good.title}</h4>
                <div>
                    <div className={styles.goodOldPrice}>{good.oldprice}₽</div>
                    <div className={styles.goodBasketContainer}>
                        <div className={styles.goodNewPiceWrapper}>
                            <div className={styles.goodNewPriceRub}>{intiger}</div>
                            <div className={styles.goodNewPriceKop}>{float}₽</div>
                        </div>
                        <button className={styles.orderButton} onClick={() => handleAddToBasket(good)}>
                        {isMobile ? 
                            (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.97388 5.51953L4.41805 3.01953H2.81055" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.44294 12.3612L4.97461 5.51953H15.5229C16.0538 5.51953 16.4488 6.0087 16.3379 6.52786L15.0863 12.3612C15.0038 12.7454 14.6646 13.0195 14.2713 13.0195H7.25711C6.86461 13.0195 6.52544 12.7454 6.44294 12.3612Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.3984 15.7496C14.15 15.7496 13.9484 15.9512 13.9508 16.1996C13.9508 16.448 14.1524 16.6496 14.4008 16.6496C14.6492 16.6496 14.8508 16.448 14.8508 16.1996C14.8496 15.9512 14.648 15.7496 14.3984 15.7496" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.56305 15.7496C7.31465 15.7496 7.11305 15.9512 7.11545 16.1996C7.11425 16.448 7.31585 16.6496 7.56425 16.6496C7.81265 16.6496 8.01425 16.448 8.01425 16.1996C8.01425 15.9512 7.81265 15.7496 7.56305 15.7496" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            ):(
                            <>
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
                            </>)
                        }    
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default GoodCard