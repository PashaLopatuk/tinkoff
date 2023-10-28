import tw from 'twrnc'
import React, { ButtonHTMLAttributes } from 'react'
import { Text, TouchableHighlight } from 'react-native'

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
interface IButton {
    onPress: () => void
    title: string
    colors?: [string, string]
}

const Button: React.FC<IButton> = ({onPress, title, colors=['bg-yellow-300', '#FBBF24']}) => {
  
    return (
    <TouchableHighlight
    onPress={onPress}
    underlayColor={colors[1]}
    style={tw`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-3`}
    >
        <Text style={tw`text-center`}>{title}</Text>
    </TouchableHighlight>
  )
}

export default Button