import styles from "../../../styles/Input.module.css"
import InputIcon from "./InputIcon";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    styleName: string;
    type:string;
    hasIcon?: boolean;
}

const Input: React.FC<InputProps> = ({ name, styleName, type, hasIcon }) => {
    return (
        <div style={{position:"relative", flex:"1 1 auto"}}>
            <input className={styles[styleName]} placeholder={name} type={type} />
            {hasIcon&& <InputIcon/>}
        </div>
    )    
}

export default Input;