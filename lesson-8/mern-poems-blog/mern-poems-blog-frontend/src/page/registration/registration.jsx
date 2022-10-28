import styles from './registration.module.scss'
import { Forma } from '../../widgets/forma/forma'

export const Registration = () => {
  return (
    <div className={styles.register}>
      <div className={styles.wrapperFormRegistration}>
        <h3>Создайте свой профиль</h3>
        <Forma textBtn='Регистрация' isRegister={true}/>
      </div>
    </div>
  )
}