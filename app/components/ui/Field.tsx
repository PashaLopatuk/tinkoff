import React, {InputHTMLAttributes} from 'react'
import {TextInput} from 'react-native'
import tw from 'twrnc'
import {Style} from "tailwind-rn";

// interface IField extends InputHTMLAttributes<HTMLInputElement> {
interface IField {
    isSecure?: boolean
    onChange: (text: string) => void
    placeholder: string
    value: string
    style?: Style
}

const Field: React.FC<IField> = ({onChange, placeholder, isSecure, value, style = {}}) => {
    return (
        <TextInput
            // showSoftInputOnFocus={false}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isSecure}
            autoCapitalize='none'
            style={{...tw`rounded-xl bg-white mt-3 p-3 w-full`, ...style}}
        />
    )
}

export default Field