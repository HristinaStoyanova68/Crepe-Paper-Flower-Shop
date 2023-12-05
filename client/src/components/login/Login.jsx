import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import generalStyles from '../../App.module.css';
import styles from './Login.module.css';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
}

export default function Login() {
  const { loginSubmitHandler, isAuthenticated } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });

  return (
    <>
      {isAuthenticated && <Navigate to={Path.NotFoundPage} />}
      
      <section className={styles.login}>
        <div className={generalStyles.form}>
          <h2>Login</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name={LoginFormKeys.Email}
              placeholder="email"
              onChange={onChange}
              value={values[LoginFormKeys.Email]}
            />
            <input
              type="password"
              name={LoginFormKeys.Password}
              placeholder="password"
              onChange={onChange}
              value={values[LoginFormKeys.Password]}
            />
            <button type="submit">login</button>
            <p className={generalStyles.message}>
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}