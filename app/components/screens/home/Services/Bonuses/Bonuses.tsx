import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Bonuses = () => {
  const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const images = [
    require('../../../../../../assets/apps/0.png'),
    require('../../../../../../assets/apps/1.png'),
    require('../../../../../../assets/apps/2.png'),
  ]

  return (
    <View style={tw`bg-white rounded-xl px-4 py-3 flex-col max-h-29 justify-between h-29 w-40 hover:bg-neutral-800`}>

      <View style={tw``}>
        <Text style={tw`text-lg font-bold`}>Cashback and bonuses</Text>
      </View>
      <View style={tw`flex-row gap-1`}>
        {
          images.map(e => (
            <Image source={e} style={tw`w-9 h-9 rounded-lg`} />
          ))
        }
      </View>

    </View>
  )
}

export default Bonuses