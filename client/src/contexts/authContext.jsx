import { createContext } from "react";

const AuthContext = createContext();

// AuthContext.displayName = 'AuthContext';
// console.log(AuthContext);

 export const AuthProvider = ({
    children,
    value
}) => {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
        
    );
}

export default AuthContext;