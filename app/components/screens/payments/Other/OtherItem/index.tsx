import {Pressable, Text, View} from 'react-native';
import {FC} from 'react';
import {IOtherItem} from '../types';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {handleTransfer} from '../../handleTransfer';
import {useAccounts} from '../../../../../hooks/useAccounts';

const CASH_CARD_NUMBER = '4152 9498 1478 8863';

const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
  const {accounts} = useAccounts();

  return (
    <Pressable
      style={styles.container}
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}>
      <View style={styles.icon}>
        <FontAwesome5Icon name={item.iconName} size={12} color={'#EDf4FE'} />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
};

export default OtherItem;
