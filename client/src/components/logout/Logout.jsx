// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import * as authService from '../../services/authService';
// import AuthContext from "../../contexts/authContext";
// import Path from "../../paths";

// export default function Logout() {
//     const navigate = useNavigate();
//     const { logoutHandler } = useContext(AuthContext);

//     useEffect(() => {
//         authService.logout()
//             .then((response) => {
//                 if (response?.success) {
//                     logoutHandler();
//                     localStorage.removeItem('accessToken');
//                     navigate(Path.Home);
//                 } else {
//                     console.error('Неуспешен изход от системата');
//                     navigate(Path.Home);
//                 }               
//             })
//             .catch((err) => {
//                 console.log(err);
//                 navigate(Path.Home)
//             });
//     }, [logoutHandler, navigate]);

//     // useEffect(() => {
//     //     const logoutAndClearLocalStorage = async () => {
//     //         try {
//     //             await authService.logout();
//     //             logoutHandler();
//     //             console.log('accessToken');
//     //             localStorage.removeItem('accessToken'); // Изтриване на accessToken от localStorage
//     //             navigate(Path.Home);
//     //         } catch (error) {
//     //             console.error("Грешка при излизане или изтриване на accessToken:", error);
//     //             navigate(Path.Home);
//     //         }
//     //     };
    
//     //     logoutAndClearLocalStorage();
//     // }, []);

//     return null;
// }


import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

export default function Logout() {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            }
                )
            .catch(() => navigate(Path.Home));            
    }, []);

    return null;
}