import { View, Text } from 'react-native'
import React from 'react'
import { TypeCurrency } from '../types'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const Currency = ({ currency }: { currency: TypeCurrency }) => {
  return (
    <View style={tw`rounded-full bg-blue-500 w-10 h-10 items-center justify-center`}>

      <View style={{ ...tw`w-6 h-6 rounded-full items-center justify-center`, backgroundColor: '#fffff' }}>
        <LinearGradient
          colors={[
            'hsl(0, 0%, 100%)',
            'hsl(226, 87%, 100%)', 
            'hsl(225, 87%, 99%)', 
            'hsl(225, 87%, 98%)', 
            'hsl(224, 88%, 96%)', 
            'hsl(224, 88%, 93%)', 
            'hsl(223, 89%, 90%)', 
            'hsl(222, 89%, 88%)', 
            'hsl(220, 90%, 86%)', 
            'hsl(217, 91%, 84%)', 
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`absolute l-0 r-0 b-0 t-0 w-6 h-6 rounded-full `}
        />
        <FontAwesome color={"#488CF9"} size={13} name={currency === 'RUB' ? 'ruble' : 'usd'} style={tw`font-extrabold`} />
      </View>
    </View>
  )
}

export default Currency