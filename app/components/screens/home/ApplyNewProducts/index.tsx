import { Alert } from 'react-native';
import Padding from '../../../ui/Padding';
import styles from './styles';
import Button from '../../../ui/Button';
import { asyncAlert } from './asyncAlert';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import {db} from '../../../../firebase';
import { db } from '../../../../utils/firebase'
import { useAuth } from '../../../../hooks/useAuth';
import { getRandomCardNumber } from '../../../../utils/getRandomCardNumber';

const ApplyNewProducts = () => {
  const { user } = useAuth();

  const registerHandler = async () => {
    try {
      const currency = await asyncAlert({
        title: 'Currency',
        msg: 'Select account currency',
        buttons: {
          resolveValue: 'RUB',
          text: 'RUB',
          resolveValueSecond: 'USD',
          textSecond: 'USD',
        },
      });

      const cardType = await asyncAlert({
        title: 'Card type',
        msg: 'Select card type',
        buttons: {
          text: 'Black',
          resolveValue: 'Tinkoff Black',
          textSecond: 'All Airlines',
          resolveValueSecond: 'Tinkoff All Airlines',
        },
      });

      await addDoc(collection(db, 'accounts'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType,
      });
    } catch (error: any) {
      Alert.alert('Error apply new product', error);
    }
  };

  return (
    <Padding style={styles.component}>
      <Button onPress={registerHandler} title={'Apply for a new product'} />
    </Padding>
  );
};

export default ApplyNewProducts;
