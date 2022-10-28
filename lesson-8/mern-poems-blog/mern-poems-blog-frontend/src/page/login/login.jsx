import { Forma } from "../../widgets/forma/forma"
import styles from "./login.module.scss"

export const Login = () => {
  return (
    <div className={styles.register}>
      <div className={styles.wrapperFormRegistration}>
        <h3>Войти</h3>
        <Forma/>
      </div>
    </div>
  )
}
