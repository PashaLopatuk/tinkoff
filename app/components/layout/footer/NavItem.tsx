import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { IFooterItem } from './types'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons'
import { TypeRootStackParamList } from '../../../navigation/types'
// import { useRoute } from '@react-navigation/native'

interface INavItem {
    item: IFooterItem
    navigate: (screenName: keyof TypeRootStackParamList) => void
    currentRoute: string

}

const NavItem: React.FC<INavItem> = ({ item, navigate, currentRoute }) => {
    
    const isActive = currentRoute === item.title;
    // const route = useRoute()


    return (
        <Pressable onPress={() => {
            navigate(item.title)

        }}
            style={{
                ...tw`items-center`,
                width: '20%'
            }}
        >
            <AntDesign name={item.iconName}
                style={tw`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
            />
            <Text style={{ ...tw`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`, marginTop: 1 }}>
                {item.title}
            </Text>
        </Pressable>
    )
}

export default NavItem