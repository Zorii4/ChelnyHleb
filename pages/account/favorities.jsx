import { useState, useEffect } from "react"
import { fetchFavorities } from "../../FAKE_API/goods"
import AccountLayout from "../../components/AccountLayout/AccountLayout"
import GoodCard from "../../components/GoodCard"
import styles from "../../styles/Favorities.module.css"
import Layout from '../../components/Layout'

const Favorities = () => {

    const [favorities, setFavorities] = useState()

    useEffect (()=> {
        setFavorities(fetchFavorities())
    }, [])

    if (!favorities) return (<p>loading</p>)

    return (
        <>
            <h1>Избранное</h1>
            <style jsx>{`
                h1 { font-family: 'Golos';
                    font-weight: normal;
                    font-size: 50px;
                    line-height: 110%;
                    color: #304250;
                    margin-bottom: 40px;}
            `}</style>
            <ul className={styles.cardWrapper}>
                {favorities.map((item) => (
                    <li className={styles.cardItem} key={item.id}>
                        <GoodCard good={item} />
                    </li>
                ))}
            </ul>    
        </>
    )
}

export default Favorities

Favorities.getLayout = function getLayout(page) {
    return (
      <Layout>
        <AccountLayout>{page}</AccountLayout>
      </Layout>
    )
}