import {Text, View} from 'react-native';
import {FC} from 'react';
import {useCurrencies} from '../../../../hooks/useCurrencies';
import styles from './styles';
import Loader from '../../../ui/Loader';

const Currencies: FC = () => {
  // const {currencies, isLoading} = useCurrencies();

  const isLoading = true;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        // currencies.map(currency => (
        //   <View style={styles.item}>
        //     <Text style={styles.itemName}>{currency.name}</Text>
        //     <Text style={styles.itemValue}>{currency.value}</Text>
        //   </View>
        // ))
        <></>
      )}
    </View>
  );
};

export default Currencies;
