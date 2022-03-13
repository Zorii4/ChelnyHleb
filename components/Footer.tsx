import styles from "../styles/Footer.module.css"
import Image from "next/image"
import logo from "../public/logo.png"
import Link from "next/link"
import Button from "./common/Button"

const Footer: React.FC = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.logoWrapper}>
                    <Image layout="fixed" src= {logo}/>
                </div>
                    <nav className={styles.navMenu}>
                        <div className={styles.navMenuLeft}>
                            <Link href="#"><a className={styles.navLink}>Каталог товаров</a></Link>
                            <Link href="#"><a className={styles.navLink}>Акции</a></Link>
                            <Link href="#"><a className={styles.navLink}>Собственные марки</a></Link>
                        </div>
                        <div className={styles.navMenuRight}>
                            <Link href="#"><a className={styles.navLink}>Контакты</a></Link>
                            <Link href="#"><a className={styles.navLink}>Активация карты</a></Link>
                            <Link href="#"><a className={styles.navLink}>Личный кабинет</a></Link>
                        </div>                       
                    </nav>      
                <div className={styles.footerConatctsWrapper}>
                    <p className={styles.footerContactsSubtitle}>Служба поддержки</p>
                    <a className={styles.footerContactsPhone} href="tel:88007009745">8 800 700-97-45</a>
                    <span className={styles.conatctsDuration}>Ежедневно 8:00 - 23:00</span>
                    <div>
                        <Link href="#">
                            <a className={styles.socialLink}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#F2F5FB"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.622 13.25H23.3788C25.2403 13.25 26.75 14.759 26.75 16.622V23.3788C26.75 25.2403 25.241 26.75 23.378 26.75H16.622C14.7597 26.75 13.25 25.241 13.25 23.378V16.622C13.25 14.7597 14.759 13.25 16.622 13.25V13.25Z" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23.7106 16.035C23.5711 16.0357 23.4578 16.149 23.4578 16.2885C23.4578 16.428 23.5718 16.5412 23.7113 16.5412C23.8508 16.5412 23.9641 16.428 23.9641 16.2885C23.9648 16.1482 23.8508 16.035 23.7106 16.035" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.909 18.0906C22.9634 19.145 22.9634 20.8546 21.909 21.909C20.8546 22.9634 19.145 22.9634 18.0906 21.909C17.0362 20.8546 17.0362 19.145 18.0906 18.0906C19.145 17.0362 20.8546 17.0362 21.909 18.0906" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.socialLink}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#F2F5FB"/>
                                <path d="M23.728 26.501V21.6161H25.3824L25.6299 19.7119H23.728V18.4969C23.728 17.9451 23.8831 17.5697 24.6801 17.5697L25.6962 17.5685V15.8656C25.5197 15.8419 24.917 15.791 24.2147 15.791C22.7487 15.791 21.7456 16.678 21.7456 18.3075V19.7119L20.2891 19.7072V21.6114L21.7456 21.6161V26.5022H23.728V26.501Z" fill="#304250"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.622 13.25H24.3788C26.2403 13.25 27.75 14.759 27.75 16.622V23.3788C27.75 25.2403 26.241 26.75 24.378 26.75H17.622C15.7597 26.75 14.25 25.241 14.25 23.378V16.622C14.25 14.7597 15.759 13.25 17.622 13.25V13.25Z" stroke="#304250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.socialLink}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#F2F5FB"/>
                                <path d="M28.1613 24.2002C27.4874 22.9875 25.7515 21.5302 25.0349 20.8961C24.8388 20.7225 24.8178 20.4221 24.9963 20.2301C26.3639 18.7605 27.4578 17.0718 27.8343 16.0515C28.0004 15.6007 27.6565 15.1245 27.172 15.1245H25.7646C25.3008 15.1245 25.0293 15.291 24.8999 15.5561C23.7633 17.8852 22.7883 18.8932 22.1058 19.4823C21.7236 19.8123 21.1278 19.539 21.1278 19.0368C21.1278 18.0693 21.1278 16.8187 21.1278 15.9318C21.1278 15.5017 20.776 15.1537 20.3421 15.1537L17.7711 15.1245C17.4475 15.1245 17.2626 15.4908 17.4569 15.7477L17.8814 16.3571C18.0411 16.5682 18.1274 16.8251 18.1274 17.0887L18.1251 19.833C18.1251 20.3103 17.5465 20.5436 17.203 20.2091C16.0409 19.0773 15.0325 16.7662 14.6695 15.6611C14.5645 15.3412 14.2649 15.1252 13.9251 15.1245L12.5388 15.1211C12.0186 15.1211 11.6384 15.6142 11.7798 16.1107C13.0465 20.5571 15.6456 24.7871 20.2776 25.2457C20.734 25.2907 21.1278 24.9232 21.1278 24.4683V23.0261C21.1278 22.6125 21.4521 22.257 21.8691 22.2465C21.8838 22.2461 21.8984 22.2461 21.913 22.2461C23.1381 22.2461 24.5103 24.0292 24.9903 24.8632C25.1283 25.1032 25.3863 25.2495 25.6653 25.2495H27.5301C28.0743 25.2495 28.4234 24.6723 28.1613 24.2002Z" fill="#304250"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.feedbackWrapper}>
                    <h3 className={styles.feedbackTitle}>Вопросы и предложения</h3>
                    <span className={styles.feedbackText}>С вашей помощью мы становимся лучше</span>
                    <Button title={"Напишите нам"} styleName="footerFeedbackBtn" />
                </div>
            </div>
            <div className={styles.copyrightContainer}>
                <div className={styles.copyrightWrapper}>
                    <p className={styles.copyrightYears}>© 2005—2022 ООО «ЧелныХлеб».</p>
                    <p className={styles.copirightInfo}>Правовая информация</p>
                </div>
                <p className={styles.siteCreators}>Разработка сайта</p>
            </div>            
        </div>
    )
}

export default Footer