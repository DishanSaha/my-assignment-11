import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

    const [user, setUSer] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google signIn-----
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            setUSer(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authinfo = {
        registerUser,
        signInUser,
        signInGoogle,
        user,
        loading,
        signOutUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}
