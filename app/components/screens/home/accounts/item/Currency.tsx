import { View, Text } from 'react-native'
import React from 'react'
import { TypeCurrency } from '../types'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'

const Currency = ({currency} : {currency: TypeCurrency}) => {
  return (
    <View style={tw`rounded-full bg-blue-500 w-10 h-10 items-center justify-center`}>
      <View style={{...tw`w-5 h-5 rounded-full items-center justify-center`, backgroundColor: '#EDF4FE'}}>
        <FontAwesome color={"#488CF9"} size={13} name={currency === 'RUB' ? 'ruble' : 'usd'}/>
      </View>
    </View>
  )
}

export default Currency