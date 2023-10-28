import {collection, limit, onSnapshot, query, where} from 'firebase/firestore';
import {useEffect, useMemo, useState} from 'react';
import {useAuth} from './useAuth';
import {db} from '../utils/firebase';
import {IProfile} from '../types/IProfile';

export const useProfile = () => {
  const {user} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState('');

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'users'), where('_id', '==', user?.uid), limit(1)),
        snapshot => {
          const profile = snapshot.docs.map(d => ({
            ...(d.data() as IProfile),
            docId: d.id,
          }))[0];

          setProfile(profile);
          setName(profile.displayName);
          setIsLoading(false);
        },
      ),
    [],
  );

  const value = useMemo(
    () => ({
      profile,
      isLoading,
      name,
      setName,
    }),
    [profile, isLoading, name],
  );

  return value;
};
