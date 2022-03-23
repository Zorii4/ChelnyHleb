import styles from "../../../styles/InputIcon.module.css"

const InputIcon: React.FC = () => {
    return (
        <svg className = {styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.21503" cy="9.21503" r="5.88495" stroke="#B0BCC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.668 16.668L13.375 13.375" stroke="#B0BCC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default InputIcon;