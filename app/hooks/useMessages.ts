import {useEffect, useState} from 'react';

import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {db} from '../utils/firebase';
import {IMessage} from '../types/IMessage';
import dayjs from 'dayjs';

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'messages'), orderBy('timestamp', 'asc')),
        snapshot => {
          setMessages(
            snapshot.docs.map(d =>
              d.data().timestamp
                ? ({
                    _id: d.id,
                    ...d.data(),
                    timestamp: dayjs
                      .unix(d.data()?.timestamp.seconds)
                      .format('HH:mm'),
                  } as IMessage)
                : ({
                    _id: d.id,
                    ...d.data(),
                  } as IMessage),
            ),
          );

          setIsLoading(false);
        },
      ),
    [],
  );

  return {
    messages,
    isLoading,
  };
};
