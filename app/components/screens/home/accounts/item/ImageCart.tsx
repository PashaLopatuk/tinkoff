import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native'
import React from 'react'
import { IAccount } from '../types'
import tw from 'twrnc'

const ImageCart: React.FC<IAccount> = (account) => {

  const imageBlack: ImageSourcePropType = require('../../../../../../assets/cards/tinkoff-black.png')
  const imageAirlines: ImageSourcePropType = require('../../../../../../assets/cards/tinkoff-airlines.png')

  React.useEffect(() => console.log('cardNumber: ', account.cardNumber), [account])

  return (
    <ImageBackground
      source={account.name === 'Tinkoff All Airlines' ? imageAirlines : imageBlack}
      resizeMode='contain'
      style={{ ...tw`justify-end w-12 h-8`, padding: 2.5 }}
      imageStyle={tw`rounded-md brightness-[0.5]	`}
    >
      <View>
        <Text style={{ ...tw`text-white font-medium`, fontSize: 11 }}>
          0000
          {account.cardNumber?.slice(-4)}
        </Text>
      </View>
    </ImageBackground>
  )
}

export default ImageCart