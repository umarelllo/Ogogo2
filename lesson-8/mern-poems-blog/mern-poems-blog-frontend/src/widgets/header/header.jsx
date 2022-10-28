import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

export const Header = (props) => {
  const isAuth = false
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLogo}>
        OGOGO | {' '}
        <Typed strings={['Blog', 'News']} typeSpeed={100} backSpeed={100}/>
      </Link>
      {isAuth ? (
        <ul className={styles.headerBtnWrapperIsAuth}>
          <li className={styles.signIn}>
            <Link to="/">
              <button>Создать пост</button>
            </Link>
          </li>
          <li className={styles.signUp}>
            <Link to="/">
              <button>Выйти</button>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.headerBtnWrapper}>
          <li className={styles.signIn}>
            <Link to="/login">
              <button>Войти</button>
            </Link>
          </li>
          <li className={styles.signUp}>
            <Link to="/register">
              <button>Создать аккаунт</button>
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}