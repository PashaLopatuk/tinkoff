import {ImageBackground, ImageSourcePropType, Text, View} from 'react-native';
import {FC} from 'react';
import {IAccount} from '../../../../../types/IAccount';
import styles from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const AccountItem: FC<{ account: IAccount }> = ({account}) => {
    const imageTinkoffBlack: ImageSourcePropType = require('../../../../../../assets/cards/tinkoff-black.png');
    const imageTinkoffAirlines: ImageSourcePropType = require('../../../../../../assets/cards/tinkoff-airlines.png');

    return (
        <View style={styles.container}>
            <View style={styles.currency}>
                <View style={styles.currencyCircle}>
                    <FontAwesome5Icon
                        color={'#488CF9'}
                        // color={'#ff0000'}
                        size={13}
                        name={account.currency === 'RUB' ? 'ruble-sign' : 'dollar-sign'}
                    />
                </View>
            </View>

            <View style={styles.balance}>
                <Text style={styles.balanceName}>{account.name}</Text>
                <Text style={styles.balanceValue}>
                    {Intl.NumberFormat(undefined, {
                        currency: account.currency,
                        style: 'currency',
                    }).format(account.balance)}
                </Text>
            </View>

            <ImageBackground
                style={styles.image}
                source={
                    account.name === 'Tinkoff Black'
                        ? imageTinkoffBlack
                        : imageTinkoffAirlines
                }
                resizeMode={'contain'}>
                <Text style={styles.imageLabel}>{account.cardNumber.slice(-4)}</Text>
            </ImageBackground>
        </View>
    );
};

export default AccountItem;
