import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import generalStyles from '../../App.module.css';
import styles from './Register.module.css'

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import Path from '../../paths';

const registerFormKeys = {
  Email: 'email',
  Password: 'password',
  RePassword: 're-password',
}

export default function Register() {
  const { registerSubmitHandler, isAuthenticated } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [registerFormKeys.Email]: '',
    [registerFormKeys.Password]: '',
    [registerFormKeys.RePassword]: '',
  });

  return (
    <>{isAuthenticated && <Navigate to={Path.NotFoundPage} />}
      <section className={styles.register}>
        <div className={generalStyles.form}>
          <h2>Register</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="email"
              id="register-email"
              placeholder="email"
              onChange={onChange}
              value={values[registerFormKeys.Email]}
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="password"
              onChange={onChange}
              value={values[registerFormKeys.Password]}
            />
            <input
              type="password"
              name="re-password"
              id="repeat-password"
              placeholder="repeat password"
              onChange={onChange}
              value={values[registerFormKeys.RePassword]}
            />
            <button type="submit">register</button>
            <p className={generalStyles.message}>Already registered? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </section>
    </>
  );
}