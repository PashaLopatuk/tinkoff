import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { IStory } from '../types/IStory';
import { useEffect, useState } from 'react';

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const storiesCollection = collection(db, 'stories');
    const storiesQuery = query(storiesCollection);

    const unsubscribe = onSnapshot(storiesQuery, (snapshot) => {
      setStories(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          ...doc.data(),
        } as IStory))
      );
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    stories,
    isLoading,
  };
};
