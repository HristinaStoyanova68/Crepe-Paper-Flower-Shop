import { useContext } from 'react';
import { Link } from 'react-router-dom';

import generalStyles from '../../App.module.css';
import styles from './Login.module.css';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

const loginFormKeys = {
  Email: 'email',
  Password: 'password',
}

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.Email]: '',
    [loginFormKeys.Password]: '',
  });

  return (
    <section className={styles.login}>
      <div className={generalStyles.form}>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
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