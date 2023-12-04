import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./authContext";

import * as itemService from '../services/itemsService';
import { Navigate } from "react-router-dom";
import Path from "../paths";

const IsOwnerContext = createContext();

export const IsOwnerGuardProvider = ({
    children,
    collectionName,
    itemId,
}) => {
    const [isOwner, setIsOwner] = useState(false);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        if (userId) {
            itemService.getItem(collectionName, itemId)
                .then(x => setIsOwner(x._ownerId === userId))
                .catch(err => {
                    setIsOwner(false);
                    console.log(err)
                })
        } else {
            setIsOwner(false);
        }
    }, [userId, collectionName, itemId]);

    if (!isOwner) {
        return <Navigate to={Path.NotFoundPage} />;
    } 

    return (
        <IsOwnerContext.Provider value={isOwner}>
            {children}
        </IsOwnerContext.Provider>
    );
}

export default IsOwnerContext;