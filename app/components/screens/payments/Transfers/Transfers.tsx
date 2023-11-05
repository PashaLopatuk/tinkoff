import {Pressable, ScrollView, Text, View} from 'react-native';
import SubHeading from '../../../ui/SubHeading';
import styles from '../Contacts/styles';
import TransferItem from "./TransferItem/TransferItem";
// import { NavigationContainer } from '@react-navigation/native';
import { useNavigation} from '@react-navigation/native'

import tw from 'twrnc'
import Padding from '../../home/Padding';
import React from "react";
import {ITransferItem} from "./types";
import {TypeRootStackParamList} from "../../../../navigation/types";

const Transfers = ({navigate} : {
    navigate: (screenName: keyof TypeRootStackParamList) => void
}) => {

    const transferItems: ITransferItem[] = [
        {
            title: 'From another bank',
            icon: 'mobile',
        },
        {
            title: 'By card number',
            icon: 'house-user',
        },
        {
            title: 'Between accounts',
            icon: 'wifi',
        },
        {
            title: 'By bank transfer',
            icon: 'ruble',
        },
        {
            title: 'By contract number',
            icon: 'ruble',
        },
        {
            title: 'SWIFT transfers',
            icon: 'ruble',
        },
    ];

    const navigation = useNavigation()

    return (
        <Padding>
            <View style={tw`bg-white rounded-xl py-3`}>
                <View style={tw`flex-row justify-between mb-2`}>
                    <SubHeading text={'Transfers'} />
                    <Pressable
                        // onPress={() => navigate('Transfers')}
                        onPress={() => navigation.navigate('Transfers')}
                    >
                        <Text style={tw`text-blue-500 font-bold text-lg mr-3`}>All</Text>
                    </Pressable>
                </View>
                <ScrollView
                    style={styles.scrollView}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {
                        transferItems.map(item => (
                            <TransferItem item={item}></TransferItem>
                        ))
                    }
                </ScrollView>
            </View>
        </Padding>
    );
};

export default Transfers;
