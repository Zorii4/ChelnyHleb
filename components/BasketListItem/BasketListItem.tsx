import Image from 'next/image'
import styles from "./BasketListItem.module.css"

const BasketListItem: React.FC = ({ props }) => {
    

    return (
        <div className={styles.container}>
            {props.map ((item) => 
                <Image src={item.image} width={94} height={56}></Image>
            )}
        </div>
    )
}

export default BasketListItem