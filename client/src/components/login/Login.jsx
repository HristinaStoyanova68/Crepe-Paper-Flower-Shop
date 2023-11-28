import { Link } from 'react-router-dom';

import styles from './Login.module.css';

import useForm from '../../hooks/useForm';

const loginFormKeys = {
  Email: 'email',
  Password: 'password',
}

export default function Login({
  loginSubmitHandler,
}) {
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.Email]: '',
    [loginFormKeys.Password]: '',
  });

  return (
    <section className="login">
      <div className={styles.form}>
        <h2>Login</h2>
        <form className={styles["login-form"]} onSubmit={onSubmit}>
          <input
            type="text"
            name={loginFormKeys.Email}
            id="email"
            placeholder="email"
            onChange={onChange}
            value={values[loginFormKeys.Email]}
          />
          <input
            type="password"
            name={loginFormKeys.Password}
            id="password"
            placeholder="password"
            onChange={onChange}
            value={values[loginFormKeys.Password]}
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