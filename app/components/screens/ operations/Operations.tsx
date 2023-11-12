import {useAccounts} from "../../../hooks/useAccounts";
import {ScrollView, Text, View} from "react-native";
import tw from "twrnc";
import {UI_BG, UI_YELLOW_300} from "../../../styles";
import CardSelect from "./CardSelect/CardSelect";
import Padding from "../../ui/Padding";
import Card from "../cardTransfer/Card/Card";
import {useState} from "react";
import {IAccount} from "../../../types/IAccount";
import Layout from "../../layout/Layout";
import useLog from "../../../hooks/useLog";
import {useEffect} from "react";
import Transaction from './Transactions/Transactions'
import Transactions from "./Transactions/Transactions";

const Operations = () => {

    const {accounts, isLoading} = useAccounts()
    const [account, setAccount] = useState<IAccount>({} as IAccount)
    //overview, Settings, Balance Limits, Actions, About Account

    const [selectedSection, setSelectedSection] = useState<'Expenses' | 'Incomes'>()

    const navigationKeys = [
        {title: 'Overview', key: 'overview'},
        {title: 'Settings', key: 'settings'},
        {title: 'Balance', key: 'balance'},
        {title: 'Limits', key: 'limits'},
        {title: 'Actions', key: 'actions'},
        {title: 'About account', key: 'about_account'},
    ]

    useEffect(() => {

        setAccount(accounts[0])
    }, [accounts]);


    return (
        <Layout>

            {/*<View style={tw`bg-[${UI_YELLOW_300}] w-full h-10`}></View>*/}

            <View style={tw`mt-10`}>
                <Padding style={tw`flex-row justify-start`}>
                    <CardSelect
                        selectHandler={(selectedItem, index) => {
                            setAccount(accounts[index])
                        }}
                        accounts={accounts}

                    />
                </Padding>
                <View style={tw`bg-neutral-400 w-full h-[1px]`}></View>
                <Padding>
                    <ScrollView
                        style={tw`flex-row my-2`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {navigationKeys.map(item => (
                            <View
                                style={tw`text-xl text-neutral-400 m-2 `}
                                key={item.key}
                            >
                                <Text

                                >{item.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <Card account={account}/>

                    <Transactions account={account}/>
                </Padding>
            </View>
        </Layout>
    )
}

export default Operations