import tw from "twrnc";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

const IconGradient = () =>
    <LinearGradient
        colors={[
            'hsl(0, 0%, 100%)',
            'hsl(226, 87%, 100%)',
            'hsl(225, 87%, 99%)',
            'hsl(225, 87%, 98%)',
            'hsl(224, 88%, 96%)',
            'hsl(224, 88%, 93%)',
            'hsl(223, 89%, 90%)',
            'hsl(222, 89%, 88%)',
            'hsl(220, 90%, 86%)',
            'hsl(217, 91%, 84%)',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={tw`absolute l-0 r-0 b-0 t-0 w-6 h-6 rounded-full `}
    />

export default IconGradient