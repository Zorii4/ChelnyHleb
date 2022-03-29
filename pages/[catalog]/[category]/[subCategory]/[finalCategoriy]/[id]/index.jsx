import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { fetchAllComments, fetchAllGoods, fetchAllUsers, fetchGoodById } from "../../../../../../FAKE_API/goods"
import styles from "./FinalCategory.module.css"
import Image from "next/image"
import Link from "next/link"
import GoodInfoList from "../../../../../../components/GoodInfoList/GoodInfoList"
import GoodCard from "../../../../../../components/GoodCard"


const GoodFromCategory = () => {
    const {query} = useRouter()
    const [goodById, setGoodById] = useState()
    const [comments, setComments] = useState()
    const [users, setUsers] = useState()
    const [goods, setGoods] = useState()

    useEffect (()=> {
        setGoodById(fetchGoodById(Number(query.id)))
        setComments(fetchAllComments())
        setUsers(fetchAllUsers())
        setGoods(fetchAllGoods())
    }, [])


    return ( 
        <>
            {goodById ? ( 
                <div>
                    <div className={styles.wrapperOne}>                        
                        <div><Image src={goodById.bigImg} width={564} height={389}></Image></div>
                        <div className={styles.rightColumnWrapper}>
                            <div className={styles.priceWrapper}>
                                <p className={styles.brandName}>{goodById.brand}</p>
                                <h2 className={styles.title}>{goodById.title}</h2>
                                <div className={styles.feedbackWrapper}>
                                    <span>
                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.67442 3.31897L13.6574 4.83688L11.3273 8.40603L11.1145 12.6631L7 11.55L2.8855 12.6631L2.67269 8.40603L0.342604 4.83688L4.32558 3.31897L7 0Z" fill="#FDC000"/>
                                        </svg>
                                    </span>
                                    <Link href='#'><a className={styles.feedbackLink}>{goodById.feedbackQuantity} отзывов</a></Link>
                                </div>
                                <div>                                 
                                    {goodById.discount &&
                                        (<div className={styles.discountWrapper}>
                                            <div className={styles.discountProcent}>
                                                <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
                                                </svg>
                                            {goodById.discount}%
                                            </div>
                                            <div className={styles.goodOldPiceWrapper}>
                                                <div className={styles.goodOldPriceRub}>{goodById.oldprice.toString().split('.')[0]}</div>
                                                <div className={styles.goodOldPriceKop}>{goodById.oldprice.toString().split('.')[1]}₽</div>
                                            </div>
                                        </div>)}
                                    <div className={styles.bottomContainer}>
                                        <div className={styles.goodNewPiceWrapper}>
                                            <div className={styles.goodNewPriceRub}>{goodById.newprice.toString().split('.')[0]}</div>
                                            <div className={styles.goodNewPriceKop}>{goodById.newprice.toString().split('.')[1]}₽</div>
                                        </div>
                                        <div className={styles.btnColumn}>
                                            <button className={styles.orderButton}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.97388 5.51953L4.41805 3.01953H2.81055" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.44294 12.3612L4.97461 5.51953H15.5229C16.0538 5.51953 16.4488 6.0087 16.3379 6.52786L15.0863 12.3612C15.0038 12.7454 14.6646 13.0195 14.2713 13.0195H7.25711C6.86461 13.0195 6.52544 12.7454 6.44294 12.3612Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14.3984 15.7496C14.15 15.7496 13.9484 15.9512 13.9508 16.1996C13.9508 16.448 14.1524 16.6496 14.4008 16.6496C14.6492 16.6496 14.8508 16.448 14.8508 16.1996C14.8496 15.9512 14.648 15.7496 14.3984 15.7496" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.56305 15.7496C7.31465 15.7496 7.11305 15.9512 7.11545 16.1996C7.11425 16.448 7.31585 16.6496 7.56425 16.6496C7.81265 16.6496 8.01425 16.448 8.01425 16.1996C8.01425 15.9512 7.81265 15.7496 7.56305 15.7496" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                В корзину                                    
                                            </button>
                                            <p className={styles.goodQuantityText}>В наличие много</p>
                                        </div>                                   
                                    </div>  
                                </div>
                            </div>
                            <p className={styles.consistTitle}>Состав: </p>
                            {goodById.consist.map ((item)=>(
                                <span key={item.id} className={styles.consistDesc}>{item},</span>
                            ))}
                        </div>   
                    </div>
                    <div className={styles.wrapperTwo}>
                        <div className={styles.characteristicWrapper}>
                            <h4 className={styles.energyTitle}>Энергетическая ценность на 100 г</h4>
                            <ul className={styles.characteristicList}>
                                <li className={styles.characteristicItem}>
                                    <div className={styles.characteristicItemData}>{goodById.energy}</div>
                                    <div className={styles.characteristicItemDescription}>Энергия, ккал</div>
                                </li>
                                <li className={styles.characteristicItem}>
                                    <div className={styles.characteristicItemData}>{goodById.protein}</div>
                                    <div className={styles.characteristicItemDescription}>Белки</div>
                                </li>
                                <li className={styles.characteristicItem}>
                                    <div className={styles.characteristicItemData}>{goodById.carbonates}</div>
                                    <div className={styles.characteristicItemDescription}>Углеводы, г</div>
                                </li>
                                <li className={styles.characteristicItem}>
                                    <div className={styles.characteristicItemData}>{goodById.fat}</div>
                                    <div className={styles.characteristicItemDescription}>Жиры, г</div>
                                </li>
                            </ul>
                        </div>
                        <h4 className={styles.goodInfoDescriptionTitle}>Информация о товаре</h4>
                        <div className={styles.infoDescriptionWrapper}>
                            <ul className={styles.infoDescriptionList}>
                                <GoodInfoList nameGoodProperty={"Категория"} valueGoodProperty={goodById.finalCategory} />
                                <GoodInfoList nameGoodProperty={"Вид продукта"} valueGoodProperty={goodById.kind} />
                                <GoodInfoList nameGoodProperty={"Тип товара"} valueGoodProperty={goodById.type} />
                                <GoodInfoList nameGoodProperty={"Вес нетто"} valueGoodProperty={goodById.weight} />
                                <GoodInfoList nameGoodProperty={"Объем"} valueGoodProperty={goodById.volume} />
                                <GoodInfoList nameGoodProperty={"Жирность"} valueGoodProperty={goodById.fatness} />
                            </ul>
                            <ul className={styles.infoDescriptionList}>
                                <GoodInfoList nameGoodProperty={"Бренд"} valueGoodProperty={goodById.brand} />
                                <GoodInfoList nameGoodProperty={"ТУ/ГОСТ"} valueGoodProperty={goodById.standart} />
                                <GoodInfoList nameGoodProperty={"Срок хранения"} valueGoodProperty={goodById.bestBefore} />
                                <GoodInfoList nameGoodProperty={"Температура хранения, мин °C"} valueGoodProperty={goodById.tempMin} />
                                <GoodInfoList nameGoodProperty={"Температура хранения, макс °C"} valueGoodProperty={goodById.tempMax} />
                            </ul>
                        </div>
                    </div>
                    <div className={styles.wrapperThree}>
                        <div className={styles.rateWrapper}>
                            <div className={styles.rateNumberWrapper}>
                                <p className={styles.rateNumber}>{goodById.rate} / 5</p>
                                <p className={styles.rateQuantity}>30 отзывов</p>
                            </div>
                            <span>
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.67442 3.31897L13.6574 4.83688L11.3273 8.40603L11.1145 12.6631L7 11.55L2.8855 12.6631L2.67269 8.40603L0.342604 4.83688L4.32558 3.31897L7 0Z" fill="#FDC000"/>
                                </svg>
                            </span>
                            <ul>
                                <li>5 звезд</li>
                                <li>4 звезды</li>
                                <li>3 звезды</li>
                                <li>2 звезды</li>
                                <li>1 звезда</li>
                            </ul>
                            <button className={styles.rateButton}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.2565 3.92271L16.0782 2.74437C15.7523 2.41854 15.2248 2.41854 14.8998 2.74437L6.07815 11.566C5.92148 11.7219 5.83398 11.9344 5.83398 12.1552V14.1669H7.84565C8.06648 14.1669 8.27898 14.0794 8.43482 13.9227L17.2565 5.10104C17.5823 4.77604 17.5823 4.24854 17.2565 3.92271V3.92271Z" stroke="#61A430" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.7582 6.5917L13.4082 4.2417" stroke="#61A430" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.5 9.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H10.8333" stroke="#61A430" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Оставить отзыв</button>
                        </div>
                        <div>
                            <div className={styles.topWrapper}>
                                <h4 className={styles.feedBackTitle}>Отзывы о товаре</h4>
                                <div>По дате добавления</div>                          
                            </div>
                            <ul>
                                {comments.map((item)=> (
                                    <li className={styles.commentItem} key={item.id}>
                                        <div className={styles.commentDateWrapper}>
                                            <p className={styles.commentUserName}>{users.find((user)=>(item.userId === user.id)).name} </p>
                                            <span className={styles.commentDate}>{item.date.getDate()} {item.date.toLocaleString('default', {month:'long'})}</span>
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 0L9.67442 3.31897L13.6574 4.83688L11.3273 8.40603L11.1145 12.6631L7 11.55L2.8855 12.6631L2.67269 8.40603L0.342604 4.83688L4.32558 3.31897L7 0Z" fill="#FDC000"/>
                                            </svg>
                                        </div>
                                        <p className={styles.commentDescription}>{item.value}</p>
                                        {item.photo && 
                                            <div className={styles.commentPhoto}>{item.photo} {item.photo} {item.photo}</div>
                                        }
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.showMoreBtn}>Показать еще</button>
                        </div>
                    </div>
                    <h3 className={styles.similarGoodTitle}>Похожие товары</h3>
                    <ul className={styles.cardWrapper}>
                        {goods.map ((item) => 
                        <li className={styles.cardItem} key={item.id}>
                            <GoodCard good={item}/>
                        </li>           
                        )}   
                    </ul>
                </div>
            ) : (             
                <h1>loading</h1>
            )}
        </>
    )      
}

export default GoodFromCategory