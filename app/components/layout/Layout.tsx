import { View, ScrollView } from 'react-native'
import React, { FC } from 'react'
import { useTailwind } from 'tailwind-rn'

interface ILayout {
    children: React.ReactNode
    isScrollView?: boolean
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {

    const tw = useTailwind()
    const styleCenter = tw('h-full w-full bg-[#F6F7F9] pt-16 flex-col gap-2')


    return (
        <View style={styleCenter}>

            {
                isScrollView ?
                    <ScrollView>{children}</ScrollView>
                    :
                    children
            }

        </View>
    )
}

export default Layout