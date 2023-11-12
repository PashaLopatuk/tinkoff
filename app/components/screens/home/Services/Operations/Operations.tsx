import {View, Text, TouchableHighlight} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {useAccounts} from '../../accounts/useAcounts'
import Loader from '../../../../ui/Loader'
import {useNavigation} from "@react-navigation/native";

const Operations = () => {

    const {accounts, isLoading} = useAccounts()

    const months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const navigation = useNavigation()

    return (
        <TouchableHighlight
            style={{
                ...tw`bg-white rounded-xl px-4 py-1 flex-col max-h-29 justify-start gap-2 h-29 w-40 hover:bg-neutral-800`,
            }}
            underlayColor={'#f0f0f0'}
            onPress={() => {
                navigation.navigate('Operations')
            }}
        >
            <>
                <View style={tw`flex-col gap-[0.1rem]`}>
                    <Text style={tw`font-bold text-lg`}>Transactions</Text>
                    <Text style={tw`font-medium text-neutral-700`}>Spents in {months[new Date().getMonth()]}</Text>
                    <Text
                        style={tw`font-medium text-neutral-700`}>
                        {
                            Math.floor(Math.random() * 1000 + 23)
                            // accounts[0]?.balance
                        }
                        {accounts[0]?.currency === 'RUB' ? '₽' : '$'} </Text>
                </View>
                <View style={tw`w-[100%] h-2 rounded-xl bg-neutral-300`}></View>
            </>

        </TouchableHighlight>
    )
}

export default Operations