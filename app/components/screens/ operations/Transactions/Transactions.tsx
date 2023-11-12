import Spents from './Spents/Spents'
import {useState} from "react";
import {Text, TouchableHighlight, View} from "react-native";
import tw from "twrnc";
import {UI_YELLOW_300} from "../../../../styles";
import {IAccount} from "../../../../types/IAccount";

const Transactions: React.FC<{ account: IAccount }> = ({account}) => {

    const SPENTS = 'spents';
    const INCOMES = 'incomes';
    const [selectedSection, setSelectedSection] = useState<typeof SPENTS | typeof INCOMES>(SPENTS)

    return (
        <View style={tw``}>
            <View style={tw`flex-row justify-center gap-4`}>
                <TouchableHighlight
                    style={tw`p-4 rounded`}
                    underlayColor={'#aaa'}
                    onPress={() => {
                        if (selectedSection === INCOMES) {
                            setSelectedSection(SPENTS)
                        }
                    }}
                >
                    <View style={tw``}>
                        <Text style={tw`
                            font-medium
                            ${
                            selectedSection === SPENTS
                                ?
                                'text-black'
                                :
                                'text-neutral-500 '
                        }
                            `}
                        >
                            Spents
                        </Text>
                        {
                            selectedSection === SPENTS ?
                                <View style={tw`h-1 w-20 bg-[rgb(253 224 71)]`}></View>
                                :
                                <></>
                        }
                        {/*<View style={tw`h-1 w-20 bg-[rgb(253 224 71)]`}></View>*/}
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={tw`p-4 rounded`}
                    underlayColor={'#aaa'}
                    onPress={() => {
                        if (selectedSection === SPENTS) {
                            setSelectedSection(INCOMES)
                        }
                    }}
                >
                    <Text style={tw`
                    font-medium 
                    ${
                        selectedSection === INCOMES
                            ?
                            'text-black'
                            :
                            'text-neutral-500 '
                    }
                    `}>Incomes</Text>

                </TouchableHighlight>
            </View>

            <View style={tw`h-1 w-30 bg-netrual-400`}></View>

            <View style={tw``}>
                {
                    selectedSection === SPENTS ?
                        <Spents account={account}/>
                        :
                        <Text>Incomes</Text>
                }
            </View>

        </View>
    )
}

export default Transactions