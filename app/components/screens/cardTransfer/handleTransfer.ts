import {IAccount} from '../../../types/IAccount';
import {Alert} from 'react-native';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    query,
    updateDoc,
    where,
} from 'firebase/firestore';
import {db} from '../../../firebase';

export const handleTransfer = async (
    fromAccount: IAccount,
    cardNumber: string,
    amount: number
) => {
    let accountToId = '';
    let currentToBalance = '';

    const querySnapshot = await getDocs(
        query(
            collection(db, 'accounts'),
            where('cardNumber', '==', cardNumber),
            limit(1),
        ),
    );

    querySnapshot.docs.forEach(doc => {
        accountToId = doc.id;
    });

    const docRefTo = doc(db, 'accounts', accountToId);
    const docSnapTo = await getDoc(docRefTo);

    if (docSnapTo.exists()) {
        currentToBalance = docSnapTo.data().ballance;
    } else {
        Alert.alert('The card where you are sending money was not found');
        return;
    }

    await updateDoc(docRefTo, {
        balance: currentToBalance + Number(amount),
    });

    const docRefFrom = doc(db, 'accounts', fromAccount._id);

    await updateDoc(docRefFrom, {
        balance: fromAccount.ballance - Number(amount),
    });

    return;
};
