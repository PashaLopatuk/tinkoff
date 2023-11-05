import {View, Text, Pressable} from 'react-native'
import React from 'react'
import Padding from '../../../ui/Padding'
import tw from 'twrnc'
import FavoriteItem from './FavoriteItem'

const Favories = () => {
  return (
    <Padding>
      <View style={tw`bg-white rounded-xl p-4`}>
        <View style={tw`flex-row justify-between mb-2`}>
            <Text style={tw`font-bold text-xl`}>Favorites</Text>
            <Pressable onPress={() => {}}>
                <Text style={tw`text-blue-500 font-bold text-lg`}>All</Text>
            </Pressable>
        </View>
        <FavoriteItem displayName='Add' />
      </View>
    </Padding>
  )
}

export default Favories