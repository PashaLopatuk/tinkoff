import { Text } from 'react-native'
import {FC} from 'react'
import tw from 'twrnc'
import Padding from '../screens/home/Padding'

const Heading: FC<{text: string, isCenter?: boolean}> = ({ text, isCenter=false }) => {
  return (
    <Padding style={tw`mt-10`}>
      <Text style={tw`text-2xl font-bold text-gray-800 ${
        isCenter?
        'text-center'
        :
        'text-start'
      }`}>{text}</Text>
    </Padding>
  )
}

export default Heading