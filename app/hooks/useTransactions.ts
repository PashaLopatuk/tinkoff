import {useEffect, useMemo, useState} from 'react';

import {collection, onSnapshot, query, where} from 'firebase/firestore';
import {db} from '../utils/firebase';
import {ITransaction} from '../types/ITransaction';
import {useAuth} from './useAuth';
import {IAccount} from "../types/IAccount";
import useLog from "./useLog";

export const useTransactions = (selectedAccount: IAccount) => {
    const {user} = useAuth();
    // const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    // useLog(selectedAccount?._id)

    useEffect(() => {
        if (selectedAccount !== undefined && selectedAccount !== null && '_id' in selectedAccount) {
            const unsubscribe = onSnapshot(
                query(collection(db, 'accounts', selectedAccount?._id, 'transactions')),
                snapshot => {
                    if (!snapshot.empty) {
                        setTransactions(
                            snapshot.docs.map(
                                d =>
                                    ({
                                        _id: d.id,
                                        ...d.data(),
                                    } as ITransaction),
                            ),
                        );
                    } else {
                        setTransactions([]);
                    }

                    setIsLoading(false);
                },
            );

            return () => unsubscribe();
        }
    }, [selectedAccount, user]);

    // const value = useMemo(() => ({
    //     transactions,
    //     isLoading
    // }), [transactions, isLoading])
    // return value

    return {
        transactions,
        isLoading
    }

};
