import {PropsWithChildren} from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css"



export default function Layout({ children }: PropsWithChildren<any>) {
  return (
      <>
          <Header/>
          <main className={styles.container}>{children}</main>
          <Footer />
      </>
  )
}