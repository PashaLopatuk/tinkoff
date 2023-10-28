import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import Padding from './Padding'
import Avatar from '../../ui/Avatar'
import { Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useProfile } from '../profile/useProfile'
import Loader from '../../ui/Loader'

const Header = () => {
  const { navigate } = useNavigation()
  const { isLoading, name} = useProfile()

  // useEffect( () => console.log('Header name: ', name), [name])

  return isLoading? <Loader/> : (
  // return (
    <Padding style={tw`flex-row items-center mt-10`}>
      <Avatar name={name} />
      <TouchableOpacity
        onPress={() => navigate('Profile')}
        style={tw`flex-row items-end`}
      >
        <Text
          style={tw`text-2xl text-gray-800 font-bold`}
        >{name}</Text>
        <Entypo
          name='chevron-small-right'
          size={24}
          style={tw`text-gray-800 mb-1`}
        />
      </TouchableOpacity>
    </Padding>
  )
}

export default Header