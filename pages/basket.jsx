import BasketListItem from "../components/BasketListItem/BasketListItem"
import { useEffect, useState } from "react"
import { fetchBasket, fetchShops, fetchAllGoods } from "../FAKE_API/goods"
import styles from "../styles/Basket.module.css"
import GoodCard from '../components/GoodCard'
import OrderAmount from '../components/OrderAmount/OrderAmount'
import { useSelector } from "react-redux"


const Basket = () => {

    // const [goodsInBasket, setGoodsInBasket] = useState()
    const [shops, setShops] = useState()
    const [goods, setGoods] = useState([])

    useEffect(()=> {
      // setGoodsInBasket(fetchBasket())
      setShops(fetchShops())
      setGoods(fetchAllGoods())
    },[])

    const goodBasket = useSelector(state => state.goodInBasket)
    let content = goodBasket.goodInBasket;
    if(!shops) return (<p>loading</p>)
    if(content.length === 0) return (<p>Basket is empty</p>)

    const handleDelete = (id) => {
      setGoodsInBasket(goodsInBasket.filter ((good)=>id !== good.id))
    }

    return (
      <>
        <h1 className={styles.mainTitle}>Корзина</h1>
        <div className={styles.basketMainContainer}>
            <ul className={styles.goodsInBasketList}>
              {content.map ((good) => (
                <BasketListItem key={good.id} props={good} onDelete={handleDelete}/>
              ))}  
            </ul>        
          <OrderAmount goodsInBasket={content} address/>
        </div>
        <h3 className={styles.orderTitle}>Заказывают вместе</h3>
        <ul className={styles.cardWrapper}>
          {goods.map ((item) => 
            <li className={styles.cardItem} key={item.id}>
              <GoodCard good={item}/>
            </li>           
          )}   
        </ul>
      </>     
    )
}

export default Basket