import { View, Text } from 'react-native'
import React from 'react'
import Padding from '../../../ui/Padding'
import tw from 'twrnc'
import FavoriteItem from './FavoriteItem'

const Favories = () => {
  return (
    <Padding>
        <Text style={tw``}>Favorites</Text>
        <FavoriteItem displayName='Add' />
    </Padding>
  )
}

export default Favories