import { View, Text, TextInput, ImageSourcePropType, ImageBackground } from 'react-native'
import React from 'react'
import Padding from '../../screens/home/Padding'
import Field from '../Field'
import tw from 'twrnc'
import { Style } from 'tailwind-rn'
// import styles from './styles'

const Search = ({ styleTw = '', style = {}, icon }: { styleTw?: string, style?: Style, icon?: ImageSourcePropType }) => {
  return (
    icon ?
      <Padding style={tw``}>
        <ImageBackground
            source={icon}
            style={tw`h-6 w-6 text-black absolute`}
        // style={styles.backgroundImage}
        >
        </ImageBackground>
          <TextInput
            style={
              {
                ...tw`
                bg-white 
                rounded 
                p-4 
                rounded-xl 
                text-md 
                font-medium 
                ${styleTw}
                pr-3
                `,
                ...style
              }
            }
            // keyboardAppearance='dark'
            placeholder={'search'}
            onChangeText={() => { }}
            value={''}
            secureTextEntry={false}
            showSoftInputOnFocus={false}
            autoCapitalize={'none'}

          />

      </Padding>
      :
      <Padding>
        {/* <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.9 5.42a6.5 6.5 0 1 1 1.42-1.28 1 1 0 0 1 .19.15l4.5 4.5a1 1 0 0 1-1.42 1.42l-4.5-4.5a1 1 0 0 1-.2-.3Z" fill="currentColor"></path></svg> */}
        <TextInput
          style={
            {
              ...tw`
              bg-white 
              rounded 
              p-4 
              rounded-xl 
              text-md 
              font-medium 
              ${styleTw}
              
              `,
              ...style
            }
          }
          placeholder={'search'}
          onChangeText={() => { }}
          value={''}
          secureTextEntry={false}
          showSoftInputOnFocus={false}
          autoCapitalize={'none'}

        />
      </Padding>
  )
}

export default Search