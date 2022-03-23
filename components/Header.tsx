import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Header.module.css"
import logo from "../public/logo.png"
import Input from "./common/input/Input"
import { useRouter } from "next/router"

const Header: React.FC = () => {

    const router = useRouter()
    return (
        <header className={styles.mainContainer}>
            <div className={styles.linkWrapper}>
                <div>
                    <Link href="#"><a className={styles.link}>Мудрый пекарь</a></Link>
                    <Link href="#"><a className={styles.link}>Домашняя кухня</a></Link>
                    <Link href="#"><a className={styles.link}>Халяль</a></Link>
                </div>
                <div>
                    <span className={styles.link}>часы работы: 9.00 - 22.00</span>
                    <span className={styles.link}><a href="tel:88007009745">8 800 700 97 45</a></span>
                </div>
            </div>
            <div className={styles.navWrapper}>
                <Link href="/"><a><Image layout="fixed" src={logo}/></a></Link>                             
                    <button className={styles.catalogButton} onClick={()=>router.push('/catalog')}>
                        каталог
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="17" height="2" rx="1" fill="white"/>
                        <rect y="5" width="17" height="2" rx="1" fill="white"/>
                        <rect y="10" width="17" height="2" rx="1" fill="white"/>
                        </svg>                
                    <style jsx>{`
                        svg {
                            margin-left: 35px;
                            margin-bottom: 20px;
                        }
                    `}</style>
                    </button>
                <Input styleName="searchInput" name="Поиск по каталогу" type="text" hasIcon/>
                <button className={styles.wayDelivery}>
                    <div className={styles.btnDiliveryWrapper}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.84519 13.3127L13.9072 2.35371C14.2052 1.54971 13.4222 0.766715 12.6182 1.06471L1.65419 5.12971C0.730187 5.47271 0.803187 6.80272 1.75819 7.04272L6.69819 8.28371L7.93119 13.2077C8.17119 14.1637 9.50219 14.2367 9.84519 13.3127V13.3127Z" stroke="#61A430" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className={styles.btnDeliveryTitle}>Выберите способ получения</span>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66699 10.6668L6.33366 6.00016L1.66699 1.3335" stroke="#61A430" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </button>
                <div className={styles.basketLinkWrapper}>
                    <Link href="#">
                        <a className={styles.basket}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.97388 5.51953L4.41805 3.01953H2.81055" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.44294 12.3612L4.97461 5.51953H15.5229C16.0538 5.51953 16.4488 6.0087 16.3379 6.52786L15.0863 12.3612C15.0038 12.7454 14.6646 13.0195 14.2713 13.0195H7.25711C6.86461 13.0195 6.52544 12.7454 6.44294 12.3612Z" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.3984 15.7496C14.15 15.7496 13.9484 15.9512 13.9508 16.1996C13.9508 16.448 14.1524 16.6496 14.4008 16.6496C14.6492 16.6496 14.8508 16.448 14.8508 16.1996C14.8496 15.9512 14.648 15.7496 14.3984 15.7496" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.56305 15.7496C7.31465 15.7496 7.11305 15.9512 7.11545 16.1996C7.11425 16.448 7.31585 16.6496 7.56425 16.6496C7.81265 16.6496 8.01425 16.448 8.01425 16.1996C8.01425 15.9512 7.81265 15.7496 7.56305 15.7496" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={styles.basket}>
                            <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.08 3.33203C15.7258 3.33203 17.5 5.81536 17.5 8.12786C17.5 12.822 10.1342 16.6654 10 16.6654C9.86583 16.6654 2.5 12.822 2.5 8.12786C2.5 5.81536 4.27417 3.33203 6.92 3.33203C8.4325 3.33203 9.42583 4.0862 10 4.75786C10.5742 4.0862 11.5675 3.33203 13.08 3.33203Z" stroke="#B0BCC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={styles.basket}>
                            <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0621 3.77078C13.2011 4.90981 13.2011 6.75654 12.0621 7.89557C10.923 9.0346 9.07632 9.0346 7.93728 7.89557C6.79825 6.75654 6.79825 4.90981 7.93728 3.77078C9.07632 2.63175 10.923 2.63175 12.0621 3.77078" stroke="#B0BCC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.33301 15.4163V16.2497C3.33301 16.7097 3.70634 17.083 4.16634 17.083H15.833C16.293 17.083 16.6663 16.7097 16.6663 16.2497V15.4163C16.6663 12.8947 13.373 11.2563 9.99967 11.2563C6.62634 11.2563 3.33301 12.8947 3.33301 15.4163Z" stroke="#B0BCC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                </div>                  
            </div>
        </header>
    )
}

export default Header