import {Text, View} from "react-native";
import tw from "twrnc";
import Padding from "../../ui/Padding";
import Heading from "../../ui/Heading";
import SubHeading from "../../ui/SubHeading";
import InputField from "../support/InputField";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import CardSelect from "./CardSelect/CardSelect";
import {useState} from "react";
import {IAccount} from "../../../types/IAccount";
import {useAccounts} from "../../../hooks/useAccounts";
import useLog from "../../../hooks/useLog";
import {handleTransfer} from './handleTransfer'

const CardTransfer = () => {
    const [selectedAccount, setSelectedAccount] = useState<IAccount | undefined>(undefined)
    const {accounts} = useAccounts()
    const [sendTo, setSendTo] = useState<string>('')
    const [amount, setAmount] = useState<number | undefined>()

    const handleTouch = () => {
        handleTransfer(selectedAccount, sendTo)
    }

    return (
        <View>
            <Padding>
                <Heading text={'By card number'} style={tw`pl-0 font-extrabold`}></Heading>
                <View>
                    <Text style={tw`font-semibold text-xl mt-3`}>From</Text>
                    {/*<Field*/}
                    {/*    onChange={() => {*/}
                    {/*    }}*/}
                    {/*    placeholder={'Card number'}*/}
                    {/*    value={''}*/}
                    {/*    style={tw`h-13 rounded-md bg-blue-400 bg-opacity-10`}*/}
                    {/*/>*/}
                    <CardSelect
                        accounts={accounts}
                        selectHandler={(selectedItem, index) => {
                            setSelectedAccount(accounts.at(index))
                        }}/>
                    <Text style={tw`font-semibold text-xl mt-3`}>To</Text>
                    <Field
                        onChange={(e) => {
                            setSendTo(e)
                        }}
                        placeholder={'Card number'}
                        value={sendTo}
                        style={tw`h-13 rounded-md bg-blue-400 bg-opacity-10`}
                    />
                    <Field
                        onChange={(e) => {
                            setAmount(Number(e))
                        }}
                        placeholder={'Amount from 0,01 P to 200 000 000 P'}
                        value={
                            amount === undefined
                                ?
                                ''
                                :
                                String(amount)
                        }
                        style={tw`h-13 rounded-md bg-blue-400 bg-opacity-10`}
                    />
                    <Text style={tw`mt-3`}>
                        The exact fee will be calculated once you add your payment details
                    </Text>
                    <Button onPress={handleTouch} title={'Transfer'}/>
                    <Text>
                        Transfer is deposited immediately, up t o1 day in rare cases
                    </Text>
                </View>
            </Padding>
        </View>
    )
}

export default CardTransfer