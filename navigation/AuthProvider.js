import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                        alert('Sign In Success!')
                    }
                    catch(e) {
                        console.log(e);
                        alert(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                        alert('Account Created Successfuly!')
                    }
                    catch(e) {
                        console.log(e);
                        alert(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    }
                    catch(e) {
                        console.log(e);
                    }
                },
            }}
>
            {children}
        </AuthContext.Provider>
    );
};