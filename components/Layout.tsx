import {PropsWithChildren} from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css"
import { useMediaQuery } from "react-responsive"
import HeaderMobile from "./mobile/HeaderMobile";

export default function Layout({ children }: PropsWithChildren<any>) {

  const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

  return (
      <>
      {isMobile ? <HeaderMobile /> : <Header />}        
        <main className={styles.container}>{children}</main>
        <Footer />
      </>
  )
}
