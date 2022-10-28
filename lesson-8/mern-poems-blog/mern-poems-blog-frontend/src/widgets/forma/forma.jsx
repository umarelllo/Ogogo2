import { Input } from "../../components/ui/input/input"
import { Button } from "../../components/ui/button/button"
import styles from "./forma.module.scss"

export const Forma = ({textBtn}) => {
  return (
    <form className={styles.form}>
    <Input type="name" placeholder="Ваше имя"/>
    <Input type="email" placeholder="E-Mail"/>
    <Input type="password" placeholder="Пароль"/>
    <Button>{textBtn}</Button>
    </form>
  )
}
