import {useState} from 'react';
import {useAuth} from './useAuth';
import { db } from '../utils/firebase'; 
import {Alert} from 'react-native';
import {doc, updateDoc} from 'firebase/firestore';

export const useUpdateProfile = (name: string, docId: string) => {
  const {user} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);

    if (!user) {
      return;
    }

    try {
      const docRef = doc(db, 'users', docId);

      await updateDoc(docRef, {
        displayName: name,
      });

      setIsSuccess(true);

      setTimeout(() => {
        setIsLoading;
      }, 3000);
    } catch (error: any) {
      Alert.alert('Error update profile', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    updateProfile,
  };
};
