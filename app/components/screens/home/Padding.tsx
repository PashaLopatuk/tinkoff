import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Padding: React.FC<{children: React.ReactNode, style?:any}> = ({children, style={}}) => {
  return (
    <View style={{...tw`px-4`, ...style}}>
      {children}
    </View>
  )
}

export default Padding