import { Link } from 'react-router-dom';
import styles from './Login.module.css';

import useForm from '../../hooks/useForm';

export default function Login() {
  const { values, onChange, onSubmit } = useForm();

  return (
    <section className="login">
      <div className={styles.form}>
        <h2>Login</h2>
        <form className={styles["login-form"]} onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={onChange}
            value={values["email"]}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={onChange}
            value={values["password"]}
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