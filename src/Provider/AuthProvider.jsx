import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = (auth) => {
        setLoading(true);
        return signOut(auth);
    }

    const userInfo = {
        user, loading, createUser, logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;