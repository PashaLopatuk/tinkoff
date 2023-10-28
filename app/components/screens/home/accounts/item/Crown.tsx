import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Svg, { Path, G } from 'react-native-svg';

const Crown = () => {
    return (
        <View style={tw`px-2 py-1 bg-neutral-600 rounded-2xl flex-row gap-1 items-center`}>
            {/* <Svg
                style={tw`max-w-9 max-h-9 object-contain`}
                xmlns="http://www.w3.org/2000/svg" width={128} height={128}>
                <G>
                    <Path
                        d="m 64.000012,31.484944 28.902346,36.127871 28.902242,-36.127871 -7.22553,65.030147 -101.158086,0 L 6.1954237,31.484944 35.0977,67.612815 64.000012,31.484944 z"
                        fill="#ffffff" // Set the fill color to white
                        strokeWidth={4.335}
                        stroke="#000000"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={4}
                        strokeOpacity={1}
                        strokeDasharray="none"
                    />
                </G>
            </Svg> */}
            <View style={tw`bg-white h-2 w-2 rounded-full`}></View>
            <Text style={tw`text-white text-sm`}>0 ₽</Text>
        </View>
    )
}

export default Crown