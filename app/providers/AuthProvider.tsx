import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { db, register, login, logout, auth } from "../utils/firebase";
import { addDoc, collection} from "@firebase/firestore";

interface IContext {
    user: User | null
    isLoading: boolean
    register: (email: string, password: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ( { children } ) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const registerHandler = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            const {user} = await register(email, password)

            await addDoc(collection(db, 'users'), {
                _id: user.uid,
                displayName: 'No name',
            })
        } catch (error: any) {
            Alert.alert('Error reg: ', error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            const userCred = {email, password}

            AsyncStorage.setItem('usercreds', JSON.stringify(userCred))

            console.log('Authprovider: ', userCred)
            await login(email, password)
            await AsyncStorage.setItem('user', JSON.stringify(userCred))
        } catch (error: any) {
            Alert.alert('Error login: ', error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true)
        try {
            await AsyncStorage.setItem('user', '')
            await logout()
        } catch (error: any) {
            Alert.alert('Error logout: ', error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => onAuthStateChanged(auth, user => {
        setUser(user || null)
        setIsLoadingInitial(false)
    }), [])

    const value = useMemo(() => ({
        user, 
        isLoading, 
        login: loginHandler, 
        logout: logoutHandler, 
        register: registerHandler,
    }), [user, isLoading])

    return <AuthContext.Provider value={value}>
        {
            !isLoadingInitial && children
        }
    </AuthContext.Provider>
}