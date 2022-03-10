import styles from "../../styles/Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    styleName: string;
}

const Button: React.FC<Props> = ({ title, styleName }) => {

    return (
        <button className={styles[styleName]}>{title}</button>
    )

}

export default Button;