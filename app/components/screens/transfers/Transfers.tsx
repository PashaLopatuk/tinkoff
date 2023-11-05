import {Text, View} from "react-native";
import tw from 'twrnc'
import Padding from "../../ui/Padding";
import Heading from "../../ui/Heading";
import BackButton from "../../ui/Back/BackButton";
import {useNavigation} from "@react-navigation/native";
import {ITransferItem} from "./types";
import TransferItem from "./TransferItem";

const Transfers = () => {
    const navigation = useNavigation()

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

    return (
        <Padding>
            <View style={tw``}>
                <View style={tw`absolute l-0 t-10 mt-12`}>
                    <BackButton onPress={() => {
                        navigation.goBack()
                    }}/>
                </View>
                <Heading text={"Transfers"} isCenter></Heading>
            </View>
            <View
                style={tw`bg-white rounded-xl p-4 mt-4 flex-col gap-4`}
            >
                {transferItems.map(item =>
                    <TransferItem {...item}/>
                )}
            </View>
        </Padding>
    )
}

export default Transfers