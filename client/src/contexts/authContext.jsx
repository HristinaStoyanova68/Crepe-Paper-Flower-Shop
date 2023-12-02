import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import usePersistedState from '../hooks/usePersistedState';
import * as authService from '../services/authService';

import Path from '../paths';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';
// console.log(AuthContext);

 export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        // navigate(Path.Home);
        navigate(-1);
    };

    const registerSubmitHandler = async (values) => {
        // console.log(values);
        const result = await authService.register(values.email, values.password);

        //TODO validations for repeating password

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Path.Home);
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