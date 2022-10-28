import styles from './input.module.scss'

export const Input = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.Minput} />  
  )
}
