import {Pressable, Text, View} from "react-native";
import tw from "twrnc";
import {ITransferItem} from "../types";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Svg, {Path} from "react-native-svg";
import {useNavigation} from "@react-navigation/native";

const TransferItem: React.FC<ITransferItem> = ({title, icon}) => {

    const navigation = useNavigation()

    return (
        <Pressable
            style={tw`rounded-xl flex-row justify-between items-center focus:bg-opacity-50`}
            onPress={() => {
                navigation.navigate('CardTransfer')
            }}
        >
            <View style={tw`flex-row items-center gap-3 max-w-36`}>
                <View style={tw`rounded-full bg-blue-500 h-10 w-10 flex items-center justify-center`}>
                    <FontAwesome5Icon name={icon} style={tw`text-white`} size={16}/>
                </View>
                <Text
                    style={tw`text-black font-semibold`}
                >
                    {title}
                </Text>
            </View>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.3}
                stroke="currentColor"
                className="w-4 h-4"
                style={tw`text-neutral-500 w-6 h-6 font-bold`}
            >
                <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </Svg>

        </Pressable>
    )
}

export default TransferItem