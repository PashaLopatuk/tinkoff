import {Text} from 'react-native'
import {FC} from 'react'
import tw from 'twrnc'
import Padding from '../screens/home/Padding'
import {Style} from "tailwind-rn";

const Heading: FC<{ text: string, isCenter?: boolean, style?: Style }> = ({text, isCenter = false, style = {}}) => {
    return (
        <Padding style={{...tw`mt-10`, ...style}}>
            <Text style={tw`text-2xl font-bold text-gray-800 ${
                isCenter ?
                    'text-center'
                    :
                    'text-start'
            }`}>{text}</Text>
        </Padding>
    )
}

export default Heading