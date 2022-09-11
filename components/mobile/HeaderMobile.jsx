import logo from '../../public/logoMobile.png'
import Link from "next/link"
import Image from "next/image"
import styles from "./HeaderMobile.module.css"
import Input from "../common/input/Input"
import MapMobile from './DeliveryMobile/MapMobile'

const HeaderMobile = ({ isCard, setIsCard }) => {

    if (!isCard) {
        return (
            <>
                <div className={styles.wayDeliveryMobile}>
                    <button className={styles.wayDeliveryBtnMobile} onClick={()=>setIsCard(true)}>
                        Выберите способ получения
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4165 9.84961L5.58317 5.47461L1.4165 1.09961" stroke="#B0BCC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.container}>
                    <div className={styles.wrapperMobile}>
                        <div className={styles.navWrapperMobile}>
                            <span className={styles.burger}></span>
                            <Link href="/"><a><Image layout="fixed" src={logo} alt=""/></a></Link>
                            <button className={styles.catalogBtn}>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.66667 6.33333H2.16667C1.24583 6.33333 0.5 5.5875 0.5 4.66667V2.16667C0.5 1.24583 1.24583 0.5 2.16667 0.5H4.66667C5.5875 0.5 6.33333 1.24583 6.33333 2.16667V4.66667C6.33333 5.5875 5.5875 6.33333 4.66667 6.33333Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.8327 6.33333H11.3327C10.4118 6.33333 9.66602 5.5875 9.66602 4.66667V2.16667C9.66602 1.24583 10.4118 0.5 11.3327 0.5H13.8327C14.7535 0.5 15.4993 1.24583 15.4993 2.16667V4.66667C15.4993 5.5875 14.7535 6.33333 13.8327 6.33333Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.8327 15.5033H11.3327C10.4118 15.5033 9.66602 14.7574 9.66602 13.8366V11.3366C9.66602 10.4158 10.4118 9.66992 11.3327 9.66992H13.8327C14.7535 9.66992 15.4993 10.4158 15.4993 11.3366V13.8366C15.4993 14.7574 14.7535 15.5033 13.8327 15.5033Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.66667 15.4994H2.16667C1.24583 15.4994 0.5 14.7535 0.5 13.8327V11.3327C0.5 10.4118 1.24583 9.66602 2.16667 9.66602H4.66667C5.5875 9.66602 6.33333 10.4118 6.33333 11.3327V13.8327C6.33333 14.7535 5.5875 15.4994 4.66667 15.4994Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Каталог
                            </button>
                            <Link href="/basket">
                                <a>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.46614 7.17529L5.74356 3.92529H3.65381" stroke="#B0BCC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.37563 16.0695L6.4668 7.17529H20.1796C20.8697 7.17529 21.3832 7.81121 21.2391 8.48613L19.612 16.0695C19.5047 16.5689 19.0638 16.9253 18.5525 16.9253H9.43405C8.9238 16.9253 8.48288 16.5689 8.37563 16.0695Z" stroke="#B0BCC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18.7178 20.4743C18.3949 20.4743 18.1328 20.7364 18.1359 21.0593C18.1359 21.3822 18.398 21.6443 18.7209 21.6443C19.0438 21.6443 19.3059 21.3822 19.3059 21.0593C19.3044 20.7364 19.0423 20.4743 18.7178 20.4743" stroke="#B0BCC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.83187 20.4743C9.50895 20.4743 9.24687 20.7364 9.24999 21.0593C9.24843 21.3822 9.51051 21.6443 9.83343 21.6443C10.1563 21.6443 10.4184 21.3822 10.4184 21.0593C10.4184 20.7364 10.1563 20.4743 9.83187 20.4743" stroke="#B0BCC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="/mobile_account">
                                <a>
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6813 2.90206C14.162 4.3828 14.162 6.78355 12.6813 8.26429C11.2005 9.74503 8.7998 9.74503 7.31905 8.26429C5.83831 6.78355 5.83831 4.3828 7.31905 2.90206C8.7998 1.42132 11.2005 1.42132 12.6813 2.90206" stroke="#B0BCC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.3335 18.0413V19.1246C1.3335 19.7226 1.81883 20.208 2.41683 20.208H17.5835C18.1815 20.208 18.6668 19.7226 18.6668 19.1246V18.0413C18.6668 14.7631 14.3855 12.6333 10.0002 12.6333C5.61483 12.6333 1.3335 14.7631 1.3335 18.0413Z" stroke="#B0BCC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <div><Input styleName="searchInputMobile" name="Поиск по каталогу" type="text" hasIcon/></div>
                    </div>
                </div> 
            </>
        )}
    else {
        return (<MapMobile />)
    }
}

export default HeaderMobile