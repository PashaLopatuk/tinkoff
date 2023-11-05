import {View, Text} from 'react-native'
import React from 'react'
import {IAccount} from '../types'
import tw from 'twrnc'
import ImageCart from './ImageCart'

function formatBankBalance(balance: number) {
    return balance.toLocaleString('uk-UA', {style: 'currency', currency: 'USD'}).slice(0, -3);
}


const Ballance = ({account}: { account: IAccount }) => {
    const {balance, currency, name} = account;
    return (
        <View style={tw`w-8/12`}>
            <Text style={tw`text-black font-bold text-lg`}>
                {/* {Intl.NumberFormat(undefined, {
            currecny:cd 
        })} */}
                {formatBankBalance(balance)}
                {currency === 'RUB' ? '₽' : '$'}
            </Text>
            <Text style={{fontSize: 15, ...tw`text-neutral-700 mb-2 text-md`}}>{name}</Text>
            <ImageCart account={account}/>
        </View>
    )
}

export default Ballance