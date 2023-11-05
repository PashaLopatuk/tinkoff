import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useAccounts } from '../../accounts/useAcounts'
import Loader from '../../../../ui/Loader'

const Operations = () => {

  const { accounts, isLoading } = useAccounts()

  const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <View style={tw`bg-white rounded-xl px-4 py-3 flex-col max-h-29 justify-between h-29 w-40 hover:bg-neutral-800`}>

      <View style={tw`flex-col gap-[0.15rem]`}>
        <Text style={tw`font-bold text-xl`}>Transactions</Text>
        <Text style={tw`font-medium text-neutral-700`}>Spents in {months[new Date().getMonth()]}</Text>
        <Text style={tw`font-medium text-neutral-700`}>{accounts[0]?.ballance - 100} {accounts[0]?.currency === 'RUB' ? '₽' : '$'} </Text>
      </View>
      <View style={tw`w-[100%] h-2 rounded-xl bg-neutral-300`}></View>

    </View>
  )
}

export default Operations