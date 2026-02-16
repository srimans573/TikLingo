
import styles from "../styles/input.module.css"

export default function InputBox ({label, onChange, backgroundColor, borderColor, fontColor}) {
    return (
        <input className={styles.input} placeholder={label}/>
        
    )
}