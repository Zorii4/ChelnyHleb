import {PropsWithChildren} from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css"
import { useMediaQuery } from "react-responsive"
import HeaderMobile from "./mobile/HeaderMobile"
import { useState } from 'react'
import DeliveryMobile from '../components/mobile/DeliveryMobile/DeliveryMobile'

export default function Layout({ children }: PropsWithChildren<any>) {
  const [isCard, setIsCard] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

  return (
    <>
      {isMobile ? <HeaderMobile setIsCard={setIsCard} isCard={isCard}/> : <Header />}        
        <main className={isCard ? styles.cardContainer : styles.container}>{!isCard ? children : <DeliveryMobile />}</main>
      <Footer />
    </>
  )
}
