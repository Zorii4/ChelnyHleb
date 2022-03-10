import {PropsWithChildren} from "react";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
      <>
          <Header/>
          <main>{children}</main>
      </>
  )
}