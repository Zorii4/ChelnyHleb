import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import { wrapper } from '../store'
import { StoreContext } from 'redux-react-hook'
import { createContext, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }:  AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? 
    ((page) => 
    <Layout>{page}</Layout>)
  
    return getLayout(<Component {...pageProps} />)
  }

export default wrapper.withRedux(MyApp)
