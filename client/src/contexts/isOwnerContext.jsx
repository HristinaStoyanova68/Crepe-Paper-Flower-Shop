import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as itemService from '../services/itemsService';
import AuthContext from "./authContext";
import Path from "../paths";

const IsOwnerContext = createContext();

export const IsOwnerGuardProvider = ({
    children,
    collectionName,
    itemId,
}) => {
    const navigate = useNavigate();
    const [isOwner, setIsOwner] = useState(false);
    const { userId } = useContext(AuthContext);

    console.log(userId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userId) {
                    const item = await itemService.getItem(collectionName, itemId);
                    setIsOwner(item._ownerId === userId);
                } else {
                    setIsOwner(false);
                }
            } catch (err) {
                setIsOwner(false);
                console.error(err);
            }
        };
    
        fetchData();
    }, [userId, collectionName, itemId]);
    

    // useEffect(() => {
    //     if (userId) {
    //         itemService.getItem(collectionName, itemId)
    //             .then(x => {
    //                 console.log(x._ownerId);
    //                 setIsOwner(x._ownerId === userId)
    //                 console.log(x._ownerId);
    //             })
    //             .catch(err => {
    //                 setIsOwner(false);
    //                 console.log(err)
    //             })
    //     } else {
    //         setIsOwner(false);
    //     }

        
    // }, [userId, collectionName, itemId]);

    // useEffect(() => {
    //     if (!isOwner) {
    //         navigate(Path.NotFoundPage);
    //     }
    // }, [isOwner, navigate]);

    return isOwner ? (
        <IsOwnerContext.Provider value={isOwner}>
            {children}
        </IsOwnerContext.Provider>
    ) : null;
}

export default IsOwnerContext;

// if (!isOwner) {
        //     console.log('not');
        //     return <Navigate to={Path.NotFoundPage} />;
        // } 