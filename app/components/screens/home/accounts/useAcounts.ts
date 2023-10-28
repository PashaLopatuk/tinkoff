import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../utils/firebase";
import { IAccount } from "./types";
import { useAuth } from "../../../../hooks/useAuth";

export const useAccounts = () => {
    const {user} = useAuth()

    const [isLoading, setIsLoading] = useState(false);
    const [accounts, setAccounts] = useState<IAccount[]>([] as IAccount[])

    useEffect(() => {
        onSnapshot(
            query(collection(db, "accounts"), where('userId', '==', user?.uid)),
            (snapshot) => {
                setAccounts(
                    snapshot.docs.map((d) => 
                    ({
                        _id: d.id,
                        ...d.data(),
                    } as IAccount)
                    // {
                    //     const account: IAccount = {
                    //         _id: d.id,
                    //         ...d.data(),
                    //     };
                    //     return account;
                    // }
                    )
                );
                setIsLoading(false);
            }
        );
    }, []);

    return { accounts, isLoading };
};
