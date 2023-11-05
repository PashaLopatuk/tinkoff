import {Pressable, Text, View} from 'react-native';
import {FC} from 'react';
import {ITransferItem} from '../types';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {handleTransfer} from '../../handleTransfer';
import {useAccounts} from '../../../../../hooks/useAccounts';
import tw from 'twrnc'

const CASH_CARD_NUMBER = '4152 9498 1478 8863';

const TransferItem: FC<{ item: ITransferItem }> = ({item}) => {
    const {accounts} = useAccounts();

    return (
        <Pressable
            style={{...styles.container, ...tw`bg-[#F6F7F9] p-4 flex-col justify-between`}}
            // onPress={handleBalanceChange.bind(this, accounts[0], CASH_CARD_NUMBER)}
            onPress={() => {
            }}
        >
            <View style={styles.icon}>
                <FontAwesome5Icon name={item.icon} size={14} color={'#EDf4FE'}/>
            </View>
            <Text style={{...styles.text, ...tw`font-bold  text-lg`}}>{item.title}</Text>
        </Pressable>
    );
};

export default TransferItem;
