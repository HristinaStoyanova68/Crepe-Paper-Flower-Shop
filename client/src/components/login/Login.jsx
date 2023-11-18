import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
    return (
        <section className="login">
    <div className={styles.form}>
      <h2>Login</h2>
      <form className={styles["login-form"]}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p className={styles.message}>
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  </section>
    );
}