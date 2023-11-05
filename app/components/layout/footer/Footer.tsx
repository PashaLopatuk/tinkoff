// import { View, Text } from 'react-native'
import React from 'react'
import Padding from '../../ui/Padding'
import tw from 'twrnc'
// import Menu from '../../screens/more/Menu'
import {menu} from './menu'
import {TypeRootStackParamList} from '../../../navigation/types'
import NavItem from './NavItem'

interface IFooter {
    navigate: (screenName: keyof TypeRootStackParamList) => void
    currentRoute: string
}

const Footer: React.FC<IFooter> = ({navigate, currentRoute}) => {
    return (
        <Padding
            style={{
                ...tw`flex-row justify-between items-center w-full bg-gray-800 px-0 pb-9 pt-2`,
                borderTopColor: '#E1E1E1',
                borderTopWidth: 1,
            }}
        >
            {
                menu.map(item => (
                    <NavItem key={item.title} item={item} navigate={navigate} currentRoute={currentRoute}/>

                ))
            }
        </Padding>
    )
}

export default Footer