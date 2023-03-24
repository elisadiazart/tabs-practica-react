import styles from './tab.module.scss'

const Tab = ({index, setValue, text, isActive}) => {
    return <div className={isActive ? `${styles.tab} ${styles.active} `: styles.tab} onClick={()=>setValue(index)}>{text}</div>
}
export default Tab