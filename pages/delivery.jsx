import styles from "../styles/Delivery.module.css"
import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import  { Navigation } from "swiper"
import 'swiper/css'
import 'swiper/css/navigation'

const Delivery = () => {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    return (
        <>
            <h1 className={styles.mainTitle}>Стоимость доставки</h1>
            <div className={styles.container}>
                <div>
                    <p className={styles.description}>Сеть &quot;Челны-Хлеб&quot; - это магазины шаговой доступности, распределённые по всей территории г. Набережные Челны. Для того, чтобы обеспечить минимальные сроки доставки продуктов для наших клиентов, мы организовали логистику таким образом, чтобы любой заказ комплектовался и доставлялся из магазина, который находится в том же районе города, что и клиент. Это позволило нам установить единую стоимость доставки в пределах г. Набережные Челны - 120 рублей. При сумме заказа от 1700 рублей - доставка бесплатно.</p>
                    <h2 className={styles.subTitle}>Минимальная сумма доставки 700 рублей. </h2>
                    <p className={styles.description}>Вес заказа должен быть в пределах 10 кг. При превышении веса заказа 10 кг - доплата 120 рублей к стоимости заказа.</p>
                    <h2 className={styles.subTitle}>Доставка осуществляется бесплатно только в пределах города Набережные Челны. </h2>
                    <p className={styles.description}>Доставка за пределы основных жилых районов города (Промзона, базы отдыха, БСИ, коттеджные посёлки) стоит дороже. Стоимость доставки в эти районы вы можете узнать по телефонам: </p>
                    <a className={styles.phoneLink} href="tel:+79673790018">+7 (967) 379-00-18</a>
                    <div className={styles.description}>Первый номер</div>
                    <a className={styles.phoneLink} href="tel:+79270483388">+7 (927) 048-33-88</a>
                    <div className={styles.description}>Второй номер</div>
                    <h2 className={styles.subTitle}>Цена доставки по районам</h2>
                    <ul className={styles.diliveryPriceList}>
                        <li className={styles.deliveryPriceItemHead}>
                            <div>Район</div>
                            <div>Цена</div>
                        </li>
                        <li><hr></hr></li>
                        <li className={styles.deliveryPriceItem}>
                            <div>Новый город</div>
                            <div>120 ₽</div>
                        </li>
                        <li className={styles.deliveryPriceItem}>
                            <div>ГЭС</div>
                            <div>120 ₽</div>
                        </li>
                        <li className={styles.deliveryPriceItem}>
                            <div>ЗЯБ</div>
                            <div>120 ₽</div>
                        </li>
                        <li className={styles.deliveryPriceItem}>
                            <div>пос. Сидоровка</div>
                            <div>200 ₽</div>
                        </li>
                        <li className={styles.deliveryPriceItem}>
                            <div>БСИ</div>
                            <div>200 ₽</div>
                        </li>
                        <li className={styles.deliveryPriceItem}>
                            <div>База отдыха</div>
                            <div>300 ₽</div>
                        </li>
                    </ul>
                    <div className={styles.description}>
                        <span className={styles.remark}>Примечание. </span>
                        Цена зависит от четности недели
                    </div>
                    <p className={styles.description}>Сеть &quot;Челны-Хлеб&quot; - это магазины шаговой доступности, распределённые по всей территории г. Набережные Челны. Для того, чтобы обеспечить минимальные сроки доставки продуктов для наших клиентов, мы организовали логистику таким образом, чтобы любой заказ комплектовался и доставлялся из магазина, который находится в том же районе города, что и клиент. </p>
                    <ul className={styles.deliveryList}>
                        <li className={styles.listDescriptionWrapper}>
                            <div className={styles.listNumber}>1</div>
                            <div className={styles.listDescript}>Это позволило нам установить единую стоимость доставки в пределах г.Набережные Челны - 120 рублей.</div>
                        </li>
                        <li className={styles.listDescriptionWrapper}>
                            <div className={styles.listNumber}>2</div>
                            <div className={styles.listDescript}>При сумме заказа от 1700 рублей - доставка бесплатно.</div>
                        </li>
                    </ul>
                    <div className={styles.deliverySwaperWrapper}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            speed={500}
                            grabCursor={true}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                              onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            }}
                        >
                        <SwiperSlide><img src="delivery.jpg"></img></SwiperSlide>
                        <SwiperSlide><img src="delivery.jpg"></img></SwiperSlide>
                        <SwiperSlide><img src="delivery.jpg"></img></SwiperSlide>
                        <div className={styles.navBtnContainer}>
                            <div className={styles.swiperBtn} ref={navigationPrevRef}>
                                <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13L1.3698 7.5547C1.14587 7.2188 1.14587 6.7812 1.3698 6.4453L5 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className={styles.swiperBtn} ref={navigationNextRef}>
                                <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L4.6302 6.4453C4.85413 6.7812 4.85413 7.2188 4.6302 7.5547L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div> 
                        </Swiper>                       
                    </div>
                    <h2 className={styles.subTitle}>Минимальная сумма доставки 700 рублей.</h2>
                </div>
                
                <div></div>
            </div>
        </>
    )
}

export default Delivery