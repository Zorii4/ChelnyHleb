import AccountLayout from "../../components/AccountLayout/AccountLayout"
import OrderTitle from "../../components/Orders/OrderTitle/OrderTitle"
import { fetchOrders } from "../../FAKE_API/goods"
import { useState, useEffect } from "react"
import Layout from '../../components/Layout'


const HistoryOrder = () => {

    const [orders, setOrders] = useState()

    useEffect (()=> {
        setOrders(fetchOrders())
    },[])


    if (!orders) return <p>loading</p>

    return (
        <>
            <h1>История заказов</h1>
            <style jsx>{`
                h1 { font-family: 'Golos';
                    font-weight: normal;
                    font-size: 50px;
                    line-height: 110%;
                    color: #304250;
                    margin-bottom: 40px;}
            `}</style>
                <OrderTitle orders={orders} isHistory={true}/>
        </>
    )
}

export default HistoryOrder

HistoryOrder.getLayout = function getLayout(page) {
    return (
      <Layout>
        <AccountLayout>{page}</AccountLayout>
      </Layout>
    )
}