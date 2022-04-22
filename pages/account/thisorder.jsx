import AccountLayout from "../../components/AccountLayout/AccountLayout"
import { useState, useEffect } from "react"
import { fetchOrders } from "../../FAKE_API/goods"
import OrderTitle from "../../components/Orders/OrderTitle/OrderTitle"
import Layout from '../../components/Layout'

const ThisOrder = () => {

const [orders, setOrders] = useState()

useEffect (()=> {
    setOrders(fetchOrders())
},[])

if (!orders) return <p>loading</p>

    return (
        <div style={{width: "100%"}}>
            <h1>Текущие заказы</h1>
            <style jsx>{`
                h1 { font-family: 'Golos';
                    font-weight: normal;
                    font-size: 50px;
                    line-height: 110%;
                    color: #304250;
                    margin-bottom: 40px;}
            `}</style>
            <OrderTitle orders={orders} />
        </div>
    )
}

export default ThisOrder

ThisOrder.getLayout = function getLayout(page) {
    return (
      <Layout>
        <AccountLayout>{page}</AccountLayout>
      </Layout>
    )
}