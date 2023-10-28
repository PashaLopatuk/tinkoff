import {useEffect, useState} from 'react';
import {IContact} from '../components/screens/payments/Contacts/types';
import {useAuth} from './useAuth';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import {db} from '../utils/firebase';

export const useContacts = () => {
  const {user} = useAuth();
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'contacts'), where('userId', '!=', user?.uid)),
        async snapshot => {
          const contactsFire = await Promise.all(
            snapshot.docs.map(async d => {
              const data = d.data() as IContact & {
                userId: string;
              };

              return data;

              // let displayName = '';
              //
              // const q = query(
              //   collection(db, 'users'),
              //   where('_id', '==', data.userId),
              // );
              //
              // const querySnapshot = await getDocs(q);
              //
              // querySnapshot.forEach(doc => {
              //   displayName = (doc.data() as IProfile).displayName;
              // });
              //
              // return {
              //   ...data,
              //   _id: d.id,
              //   displayName,
              // };
            }),
          );

          console.log(contactsFire);

          // const contactsFireList = contactsFire
          //   .filter(
          //     (v, i, a) =>
          //       a.findIndex(t => t.displayName === v.displayName) === i,
          //   )
          //   .filter(i => i.displayName);
          //
          // console.log(contactsFireList);
          // setContacts(contactsFireList);

          setContacts(contactsFire);

          setIsLoading(false);
        },
      ),
    [],
  );

  return {contacts, isLoading};
};
