import styles from "./LoginModal.module.css"
import Link from "next/link"
import { useState } from "react"

const LoginModal = () => {
    const [isReg, setIsReg] = useState(false)
    const [isForgot, setIsForgot] = useState(false)
    
    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.container}>
                <div className={`${styles.front} ${isReg && styles.frontReg || isForgot && styles.frontReg}`}>
                    <p className={styles.title}>Добро пожаловать</p>
                    <div className={styles.subtitle}>Получайте бонусы, скидки, отслеживайте заказы</div>
                    <input className={styles.loginField} type="tel" placeholder="Телефон"/>
                    <input className={styles.loginField} type="password" placeholder="Пароль"/>
                    <button className={styles.loginBtn}>Войти</button>
                    <div className={styles.linkWrapper}>
                        <div className={styles.forgetPswrd} onClick={()=>setIsForgot(true)}>Забыли пароль?</div>
                        <div className={styles.registrationLink} onClick={()=>setIsReg(true)}>Регистрация</div>
                    </div>
                    <div className={styles.bottomWrapper}>
                        <div className={styles.autorizationText}>Авторизоваться</div>
                        <div className={styles.socialLinkWrapper}>
                            <Link href="#">
                                <a className={styles.socialLink}>
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.85912 11.0486H5.9635V1.62752H5.11654C3.56438 1.62752 2.74884 2.4109 2.74884 3.57135C2.74884 4.88819 3.31373 5.49912 4.47346 6.2825L5.43004 6.92557L2.67065 11.0486H0.617188L3.0945 7.36549C1.66657 6.34534 0.867111 5.35735 0.867111 3.68024C0.867111 1.57929 2.325 0.152832 5.09973 0.152832H7.85912V11.0486Z" fill="#FC3F1D"/>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="#">
                                <a className={styles.socialLink}>
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.2945 7.68804H14.7549V7.66024H8.72606V10.3397H12.5118C11.9595 11.8995 10.4754 13.0192 8.72606 13.0192C6.50644 13.0192 4.70683 11.2196 4.70683 8.99999C4.70683 6.78037 6.50644 4.98076 8.72606 4.98076C9.75063 4.98076 10.6828 5.36727 11.3925 5.99863L13.2872 4.10389C12.0908 2.98889 10.4905 2.30127 8.72606 2.30127C5.02669 2.30127 2.02734 5.30062 2.02734 8.99999C2.02734 12.6994 5.02669 15.6987 8.72606 15.6987C12.4254 15.6987 15.4248 12.6994 15.4248 8.99999C15.4248 8.55084 15.3786 8.11241 15.2945 7.68804Z" fill="#FFC107"/>
                                    <path d="M2.79688 5.88207L4.99774 7.49612C5.59325 6.02174 7.03549 4.98076 8.72323 4.98076C9.7478 4.98076 10.6799 5.36727 11.3897 5.99863L13.2844 4.10389C12.088 2.98889 10.4877 2.30127 8.72323 2.30127C6.15025 2.30127 3.91891 3.75389 2.79688 5.88207Z" fill="#FF3D00"/>
                                    <path d="M8.72525 15.6988C10.4555 15.6988 12.0277 15.0366 13.2164 13.9598L11.1432 12.2054C10.4706 12.7149 9.63461 13.0193 8.72525 13.0193C6.98292 13.0193 5.5035 11.9083 4.94617 10.3579L2.76172 12.041C3.87036 14.2103 6.1218 15.6988 8.72525 15.6988Z" fill="#4CAF50"/>
                                    <path d="M15.295 7.68796H14.7554V7.66016H8.72656V10.3396H12.5123C12.2471 11.0889 11.7651 11.735 11.1435 12.2056C11.1438 12.2052 11.1441 12.2052 11.1445 12.2049L13.2177 13.9593C13.071 14.0926 15.4253 12.3493 15.4253 8.9999C15.4253 8.55075 15.3791 8.11232 15.295 7.68796Z" fill="#1976D2"/>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="#">
                                <a className={styles.socialLink}>
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65701 9.5098C2.99349 9.5098 0.33349 6.31268 0.222656 0.992676H2.55868C2.63541 4.89742 4.35759 6.5514 5.72169 6.89242V0.992676H7.92131V4.36031C9.26836 4.21537 10.6836 2.68075 11.161 0.992676H13.3607C13.1808 1.86816 12.8221 2.69711 12.3072 3.42766C11.7923 4.15822 11.1322 4.77466 10.3682 5.23845C11.221 5.66222 11.9743 6.26203 12.5783 6.99831C13.1823 7.73458 13.6233 8.59057 13.8722 9.5098H11.4509C11.2275 8.71138 10.7734 7.99667 10.1455 7.45524C9.51762 6.9138 8.7439 6.56973 7.92131 6.46614V9.5098H7.65701Z" fill="#0077FF"/>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <button className={styles.closeBtn} onClick={()=>close(false)}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="#304250"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 0.46967C9.82322 0.762563 9.82322 1.23744 9.53033 1.53033L1.53033 9.53033C1.23744 9.82322 0.762563 9.82322 0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967L8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967Z" fill="#304250"/>
                        </svg>
                    </button>
                </div>
             
                <div className={`${styles.back} ${isReg && styles.backReg}`}>
                    <p className={styles.title}>Добро пожаловать</p>
                    <div className={styles.subtitle}>Войдите или зарегистрируйтесь, чтобы продолжить</div>
                    <input className={styles.loginField} type="tel" placeholder="Телефон"/>
                    <button className={styles.loginBtn}>Получить код</button>
                    <p>Войти с помощью</p>
                    <div className={styles.socialLinkWrapper}>
                        <Link href="#">
                            <a className={styles.socialLink}>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.85912 11.0486H5.9635V1.62752H5.11654C3.56438 1.62752 2.74884 2.4109 2.74884 3.57135C2.74884 4.88819 3.31373 5.49912 4.47346 6.2825L5.43004 6.92557L2.67065 11.0486H0.617188L3.0945 7.36549C1.66657 6.34534 0.867111 5.35735 0.867111 3.68024C0.867111 1.57929 2.325 0.152832 5.09973 0.152832H7.85912V11.0486Z" fill="#FC3F1D"/>
                                </svg>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.socialLink}>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2945 7.68804H14.7549V7.66024H8.72606V10.3397H12.5118C11.9595 11.8995 10.4754 13.0192 8.72606 13.0192C6.50644 13.0192 4.70683 11.2196 4.70683 8.99999C4.70683 6.78037 6.50644 4.98076 8.72606 4.98076C9.75063 4.98076 10.6828 5.36727 11.3925 5.99863L13.2872 4.10389C12.0908 2.98889 10.4905 2.30127 8.72606 2.30127C5.02669 2.30127 2.02734 5.30062 2.02734 8.99999C2.02734 12.6994 5.02669 15.6987 8.72606 15.6987C12.4254 15.6987 15.4248 12.6994 15.4248 8.99999C15.4248 8.55084 15.3786 8.11241 15.2945 7.68804Z" fill="#FFC107"/>
                                <path d="M2.79688 5.88207L4.99774 7.49612C5.59325 6.02174 7.03549 4.98076 8.72323 4.98076C9.7478 4.98076 10.6799 5.36727 11.3897 5.99863L13.2844 4.10389C12.088 2.98889 10.4877 2.30127 8.72323 2.30127C6.15025 2.30127 3.91891 3.75389 2.79688 5.88207Z" fill="#FF3D00"/>
                                <path d="M8.72525 15.6988C10.4555 15.6988 12.0277 15.0366 13.2164 13.9598L11.1432 12.2054C10.4706 12.7149 9.63461 13.0193 8.72525 13.0193C6.98292 13.0193 5.5035 11.9083 4.94617 10.3579L2.76172 12.041C3.87036 14.2103 6.1218 15.6988 8.72525 15.6988Z" fill="#4CAF50"/>
                                <path d="M15.295 7.68796H14.7554V7.66016H8.72656V10.3396H12.5123C12.2471 11.0889 11.7651 11.735 11.1435 12.2056C11.1438 12.2052 11.1441 12.2052 11.1445 12.2049L13.2177 13.9593C13.071 14.0926 15.4253 12.3493 15.4253 8.9999C15.4253 8.55075 15.3791 8.11232 15.295 7.68796Z" fill="#1976D2"/>
                                </svg>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.socialLink}>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.65701 9.5098C2.99349 9.5098 0.33349 6.31268 0.222656 0.992676H2.55868C2.63541 4.89742 4.35759 6.5514 5.72169 6.89242V0.992676H7.92131V4.36031C9.26836 4.21537 10.6836 2.68075 11.161 0.992676H13.3607C13.1808 1.86816 12.8221 2.69711 12.3072 3.42766C11.7923 4.15822 11.1322 4.77466 10.3682 5.23845C11.221 5.66222 11.9743 6.26203 12.5783 6.99831C13.1823 7.73458 13.6233 8.59057 13.8722 9.5098H11.4509C11.2275 8.71138 10.7734 7.99667 10.1455 7.45524C9.51762 6.9138 8.7439 6.56973 7.92131 6.46614V9.5098H7.65701Z" fill="#0077FF"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${styles.back} ${isForgot && styles.backReg}`}>
                    <p className={styles.title}>Запрос пароля</p>
                    <div className={styles.subtitle}>Вышлем новый пароль на указанный телефон</div>
                    <input className={styles.loginField} type="tel" placeholder="Телефон"/>
                    <button className={styles.loginBtn}>Войти</button>
                    <div className={styles.linkWrapper}>
                        <div className={styles.forgetPswrd}>Авторизация</div>
                        <div className={styles.registrationLink} onClick={()=>setIsReg(true)}>Регистрация</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal