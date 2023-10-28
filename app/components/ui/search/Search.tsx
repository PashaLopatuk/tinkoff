import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Padding from '../../screens/home/Padding'
import Field from '../Field'
import tw from 'twrnc'

const Search = ({styleTw=''}: {styleTw?: string}) => {
  return (
    <Padding>
      {/* <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.9 5.42a6.5 6.5 0 1 1 1.42-1.28 1 1 0 0 1 .19.15l4.5 4.5a1 1 0 0 1-1.42 1.42l-4.5-4.5a1 1 0 0 1-.2-.3Z" fill="currentColor"></path></svg> */}
      <TextInput
        style={tw`bg-white rounded p-4 rounded-xl text-md font-medium ${styleTw}`}
        placeholder={'search'}
        onChangeText={() => {}}
        value={''}
        secureTextEntry={false}
        showSoftInputOnFocus={false}
        autoCapitalize={'none'}
    />
    </Padding>
  )
}

export default Search