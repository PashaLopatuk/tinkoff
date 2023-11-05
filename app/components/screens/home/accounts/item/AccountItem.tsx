import {View, Text, Pressable} from 'react-native'
import React from 'react'
import {IAccount} from '../types'
import tw from 'twrnc'

import Currency from './Currency'
import Ballance from './Ballance'
import ImageCart from './ImageCart'
import Crown from './Crown'
import {asyncAlert} from "./asyncAlert";
import {handleBalanceChange} from "./handleBalanceChange";

const AccountItem: React.FC<{ account: IAccount }> = ({account}) => {
    React.useEffect(() => console.log(account), [account])

    const handleTouch = () => {
        // asyncAlert(
        //     {
        //         title: '',
        //         msg: '',
        //         buttons: {
        //             text: '',
        //             resolveValue: '',
        //             textSecond: '',
        //             resolveValueSecond: '',
        //         }
        //     }
        // )
        handleBalanceChange(account, account.cardNumber)
    }

    return (
        <Pressable
            style={tw`flex-row items-start justify-between bg-white rounded-xl p-4`}
            onPress={handleTouch}
        >
            <View style={tw`flex-row gap-3`}>
                <Currency currency={account.currency}/>
                <Ballance account={account}/>
            </View>
            <Crown/>

        </Pressable>
    )
}

export default AccountItem