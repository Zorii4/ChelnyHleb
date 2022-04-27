import OrderTitle from "../../components/Orders/OrderTitle/OrderTitle"
import { useState, useEffect } from "react"
import { fetchOrders } from "../../FAKE_API/goods"

const MobileHistoryorder = () => {

    const [orders, setOrders] = useState()

    useEffect (()=> {
        setOrders(fetchOrders())
    },[])
    
    if (!orders) return <p>loading</p>

    return (
        <>
            <OrderTitle orders={orders} isHistory={true}/>
        </>
    )
}

export default MobileHistoryorder