import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import usePersistedState from '../hooks/usePersistedState';
import * as authService from '../services/authService';

import Path from '../paths';
import inputValuesValidation from '../utils/inputValuesValidation';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {

        try {
            if (values.email === '' || values.password === '') {
                throw new Error('All fields are required!');
            }
            const result = await authService.login(values.email, values.password);
    
            setAuth(result);
    
            localStorage.setItem('accessToken', result.accessToken);
    
            navigate(Path.Home);
        } catch (error) {
            throw error;
        }
    };

    const registerSubmitHandler = async (values) => {

        try {
            
            inputValuesValidation(values);
    
            const result = await authService.register(values.username, values.email, values.password);
    
            setAuth(result);
    
            localStorage.setItem('accessToken', result.accessToken);
    
            navigate(Path.Home);
        } catch (error) {
            throw error;
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;