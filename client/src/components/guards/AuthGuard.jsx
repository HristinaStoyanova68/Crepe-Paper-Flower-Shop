import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return (
            <Navigate to={Path.Login} />
        );
    }

    return <Outlet />;
}