import {View, Text, ImageBackground, ImageSourcePropType} from 'react-native'
import React from 'react'
import {IAccount} from '../types'
import tw from 'twrnc'
import {TinkoffBlackMini, TinkoffAllAirlinesMini} from "../../../../../../assets/cards/cardsAssets";

const ImageCart = ({account}: { account: IAccount }) => {

    const imageBlack: ImageSourcePropType = require('../../../../../../assets/cards/tinkoff-black.png')
    const imageAirlines: ImageSourcePropType = require('../../../../../../assets/cards/tinkoff-airlines.png')

    // React.useEffect(() => console.log('cardNumber: ', account.cardNumber), [account])

    return (
        <ImageBackground
            source={account.name === 'Tinkoff All Airlines' ? TinkoffAllAirlinesMini : TinkoffBlackMini}
            resizeMode='contain'
            style={{...tw`justify-end w-12 h-8`, padding: 2.5}}
            imageStyle={tw`rounded-md brightness-[0.5]	`}
        >
            <View>
                <Text style={{...tw`text-white font-medium text-xs`, fontSize: 9, lineHeight: 9}}>
                    {account.cardNumber?.slice(-4)}
                </Text>
            </View>
        </ImageBackground>
    )
}

export default ImageCart