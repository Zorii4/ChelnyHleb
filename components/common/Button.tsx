import styles from "../../styles/Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    styleName: string
    isCatalog?: boolean
}

const Button: React.FC<Props> = ({ title, styleName, isCatalog }) => {

    return (
        <button className={styles[styleName]}>
            {title}
        {isCatalog &&
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="17" height="2" rx="1" fill="white"/>
            <rect y="5" width="17" height="2" rx="1" fill="white"/>
            <rect y="10" width="17" height="2" rx="1" fill="white"/>
            </svg>                
        }
            <style jsx>{`
                svg {
                    margin-left: 35px;
                }
            `}</style>
        </button>
        
    )

}

export default Button;