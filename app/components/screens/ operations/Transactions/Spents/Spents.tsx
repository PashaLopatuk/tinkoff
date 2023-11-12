import {Text, View} from "react-native";
import tw from "twrnc";
import {IAccount} from "../../../../../types/IAccount";
import {useTransactions} from "../../../../../hooks/useTransactions";
import {useEffect, useState} from "react";
import {ITransaction} from "../../../../../types/ITransaction";
import {UI_BG} from "../../../../../styles";
import useLog from "../../../../../hooks/useLog";
import TransactionList from "./TransactionList";

function formatBankBalance(balance: number) {
    return balance !== undefined ? balance.toLocaleString('uk-UA', {
        style: 'currency',
        currency: 'USD'
    }).slice(0, -3) : ''
}

const Spents: React.FC<{ account: IAccount }> = ({account}) => {

    const {transactions} = useTransactions(account)

    useLog(transactions)

    // const [transactions, setTransactions] = useState<ITransaction[]>([])
    // useEffect(() => setTransactions(() => useTransactions(account)?.transactions), [account])

    return (
        <View style={tw``}>

            <View style={tw`flex justify-center items-center my-10`}>
                <View style={tw`bg-blue-400 rounded-full h-50 w-50 justify-center items-center`}>
                    <View style={tw`rounded-full h-43 w-43 bg-[#F6F7F9] justify-center items-center`}>
                        <Text style={tw`text-neutral-500`}>Spents</Text>
                        <Text style={tw`text-black font-semibold text-xl`}>
                            {formatBankBalance(account?.balance)}
                            <Text style={tw`text-neutral-600`}>
                                {
                                    account?.currency === 'USD'
                                        ?
                                        '$'
                                        :
                                        '₽'
                                }
                            </Text>
                        </Text>
                        <Text style={tw`text-neutral-500`}>100%</Text>
                    </View>
                </View>
            </View>


            <View style={tw``}>
                <Text style={tw`text-neutral-600`}>Transfers and cash</Text>
                <View
                    //${
                    //                         account ?
                    //                             `w-[${
                    //                                 (14 + String(formatBankBalance(account.balance)).length) / 2
                    //                             }rem]`
                    //                             :
                    //                             'w-[12rem]'
                    //                     }
                    style={{
                        ...tw`border border-neutral-300 rounded-lg p-1 px-2 flex-row gap-1 items-center mt-2`,
                        ...{width: Math.floor((14 + String(formatBankBalance(account?.balance)).length) * 8)}
                    }}>
                    <View style={tw`h-3 w-3 rounded-full bg-blue-400`}></View>
                    <Text style={tw`text-lg w-fit`}>Transfers&nbsp;
                        <Text style={tw`text-black font-semibold w-fit`}>
                            {formatBankBalance(account?.balance)}
                            <Text style={tw`text-neutral-600`}>
                                {
                                    account?.currency === 'USD'
                                        ?
                                        '$'
                                        :
                                        '₽'
                                }
                            </Text>
                        </Text>
                    </Text>
                </View>
            </View>

            <View style={tw`mt-10`}>
                <TransactionList transactions={transactions} account={account}/>
                {/*{*/}
                {/*    transactions?.map((item) => (*/}
                {/*        <View>*/}
                {/*            <Text style={tw`text-black`}>*/}
                {/*                {item?.Amount}*/}
                {/*            </Text>*/}
                {/*        </View>*/}
                {/*    ))*/}
                {/*}*/}
            </View>
        </View>
    )
}

export default Spents