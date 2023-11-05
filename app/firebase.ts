import {API_KEY} from '@env'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'

import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "tinkoff-dc8b4.firebaseapp.com",
  projectId: "tinkoff-dc8b4",
  storageBucket: "tinkoff-dc8b4.appspot.com",
  messagingSenderId: "960606947219",
  appId: "1:960606947219:web:3b02c2d5d389d5b9534a66",
  measurementId: "G-8BTR0QHRGX"
};


initializeApp(firebaseConfig);


export const auth = getAuth()

export const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)


export const login = async (email: string, password: string) =>
    await signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()