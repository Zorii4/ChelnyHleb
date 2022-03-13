import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Header.module.css"
import logo from "../public/logo.png"
import Button from "./common/Button"
import Input from "./common/input/Input"

const Header: React.FC = () => {
    return (
        <header className={styles.mainContainer}>
            <div className={styles.container}>
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
            <div className={styles.containerr}>
                <Image layout="fixed" src= {logo}/>
                <Button styleName="catalogbutton" title="КАТАЛОГ"/>
                <Input styleName="searchInput" name="Поиск по каталогу" type="text" hasIcon/>
                <Button styleName="wayDelivery" title="Выберите способ получения" />
                <Link href="#">
                    <a className={styles.basket}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.97388 5.51953L4.41805 3.01953H2.81055" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.44294 12.3612L4.97461 5.51953H15.5229C16.0538 5.51953 16.4488 6.0087 16.3379 6.52786L15.0863 12.3612C15.0038 12.7454 14.6646 13.0195 14.2713 13.0195H7.25711C6.86461 13.0195 6.52544 12.7454 6.44294 12.3612Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.3984 15.7496C14.15 15.7496 13.9484 15.9512 13.9508 16.1996C13.9508 16.448 14.1524 16.6496 14.4008 16.6496C14.6492 16.6496 14.8508 16.448 14.8508 16.1996C14.8496 15.9512 14.648 15.7496 14.3984 15.7496" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.56305 15.7496C7.31465 15.7496 7.11305 15.9512 7.11545 16.1996C7.11425 16.448 7.31585 16.6496 7.56425 16.6496C7.81265 16.6496 8.01425 16.448 8.01425 16.1996C8.01425 15.9512 7.81265 15.7496 7.56305 15.7496" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </Link>
                <Link href="#">
                    <a className={styles.basket}>
                        <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.08 3.33203C15.7258 3.33203 17.5 5.81536 17.5 8.12786C17.5 12.822 10.1342 16.6654 10 16.6654C9.86583 16.6654 2.5 12.822 2.5 8.12786C2.5 5.81536 4.27417 3.33203 6.92 3.33203C8.4325 3.33203 9.42583 4.0862 10 4.75786C10.5742 4.0862 11.5675 3.33203 13.08 3.33203Z" stroke="#B0BCC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </Link>
                <Link href="#">
                    <a className={styles.basket}>
                        <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0621 3.77078C13.2011 4.90981 13.2011 6.75654 12.0621 7.89557C10.923 9.0346 9.07632 9.0346 7.93728 7.89557C6.79825 6.75654 6.79825 4.90981 7.93728 3.77078C9.07632 2.63175 10.923 2.63175 12.0621 3.77078" stroke="#B0BCC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33301 15.4163V16.2497C3.33301 16.7097 3.70634 17.083 4.16634 17.083H15.833C16.293 17.083 16.6663 16.7097 16.6663 16.2497V15.4163C16.6663 12.8947 13.373 11.2563 9.99967 11.2563C6.62634 11.2563 3.33301 12.8947 3.33301 15.4163Z" stroke="#B0BCC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </Link>                    
            </div>
        </header>
    )
}

export default Header