import { Link } from 'react-router-dom';
import styles from './Register.module.css'

export default function Register() {
    return (
        <section className="register">
    <div className={styles.form}>
      <h2>Register</h2>
      <form className={styles["register-form"]}>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p className={styles.message}>Already registered? <Link to="/login">Login</Link></p>
      </form>
    </div>
  </section>
    );
}