import { View, Text } from 'react-native'
import React from 'react'
import { IAccount } from '../types'
import tw from 'twrnc'

import Currency from './Currency'
import Ballance from './Ballance'
import ImageCart from './ImageCart'
import Crown from './Crown'

const AccountItem: React.FC<{ account: IAccount }> = ({ account }) => {
  React.useEffect(() => console.log(account), [account])

  return (
    <View style={tw`flex-row items-start justify-between bg-white rounded-xl p-4`}>
      <View style={tw`flex-row gap-3`}>
        <Currency currency={account.currency} />

        <Ballance account={account} />
      </View>
      <Crown/>

    </View>
  )
}

export default AccountItem