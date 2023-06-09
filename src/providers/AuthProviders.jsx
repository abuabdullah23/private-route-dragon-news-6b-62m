import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../frebase/firebase-config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    // const user = null;
    const [user, setUser] = useState(null);

    // for loading state
    const [loading, setLoading] = useState(true);

    // Create user with email & password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Observe user login or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            console.log(loggedUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;