import {IAccount} from "../../../../types/IAccount";
import {ImageBackground, Text, View} from "react-native";
import tw from "twrnc";
import useLog from "../../../../hooks/useLog";
import {
    TinkoffBlack,
    TinkoffAllAirlines,
    TinkoffAllAirlinesMini,
    TinkoffBlackMini
} from "../../../../../assets/cards/cardsAssets";
import React from "react";

interface ICard {
    account: IAccount
}

function formatBankBalance(balance: number) {
    return balance !== undefined ? balance.toLocaleString('uk-UA', {
        style: 'currency',
        currency: 'USD'
    }).slice(0, -3) : ''
}

const Card: React.FC<ICard> = ({account}) => {


    return (
        <View style={tw`p-2`}>
            <ImageBackground
                source={
                    account?.name === 'Tinkoff Black' ?
                        TinkoffBlack
                        :
                        TinkoffAllAirlines
                }
                imageStyle={tw`rounded-xl`}
                style={tw`rounded-xl`}
            >

                <View style={tw`h-60 w-20 p-6 justify-between`}>
                    <View style={tw`w-full`}>
                        <Text style={tw`text-neutral-400 text-xs w-60`}>On the debit account</Text>
                        <Text style={tw`text-white text-xl font-bold w-60 `}>
                            {formatBankBalance(account?.balance)}
                            {account?.currency === 'RUB' ? '₽' : '$'}
                        </Text>
                        <Text style={tw`text-neutral-400 text-xs w-60 mt-4`}>Cashback: <Text style={tw`text-white`}>0
                            ₽</Text>
                        </Text>
                        <Text style={tw`text-neutral-400 text-xs w-60 mt-1`}>Bid: <Text style={tw`text-white`}>5
                            %</Text>
                        </Text>
                    </View>

                    <View style={tw`flex-row gap-4 w-60`}>
                        <View style={tw``}>
                            <ImageBackground
                                style={tw`w-14 h-11 `}
                                imageStyle={tw`rounded-md brightness-50`}
                                source={
                                    account?.name === 'Tinkoff Black' ?
                                        TinkoffBlackMini
                                        :
                                        TinkoffAllAirlinesMini
                                }
                            >
                                <View style={tw`self-end mr-1 mt-[0.4rem] flex-col gap-2`}>
                                    <Text style={{
                                        ...tw`text-white font-medium text-xs bg-black p-[0.1rem]`,
                                        fontSize: 8,
                                        lineHeight: 8
                                    }}>
                                        {account?.cardNumber?.slice(-4)}
                                    </Text>
                                    <Text style={{
                                        ...tw`text-white font-extrabold text-xs bg-black p-[0.1rem]`,
                                        fontSize: 7,
                                        lineHeight: 7
                                    }}>МИР</Text>
                                </View>
                            </ImageBackground>
                            <Text style={tw`text-neutral-300 text-xs overflow-hidden`}>
                                Debit card
                            </Text>
                        </View>

                        <View style={tw`w-14 h-11 bg-[#423d43] rounded-md flex items-center justify-center`}>
                            <View style={tw`bg-white h-[0.15rem] w-4 rounded t-2 absolute`}></View>
                            <View style={tw`bg-white w-[0.15rem] h-4 rounded absolute`}></View>
                        </View>
                    </View>

                </View>

            </ImageBackground>
        </View>

    )
}

export default Card