import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import { useAccounts } from './useAcounts'
import Padding from '../Padding'
import Loader from '../../../ui/Loader'
import AccountItem from './item/AccountItem'
import tw from 'twrnc'

const Accounts = () => {

    const { accounts, isLoading } = useAccounts()

    return (
        <Padding style={tw`flex-col gap-2`}>{isLoading ? <Loader /> : accounts.length ? accounts.map(
            (account, idx) => (
                <Fragment key={account._id}>
                    <AccountItem account={account} />
                    {/* {idx + 1 !== accounts.length &&
                        <View style={{
                            borderBottomColor: '#E0E1E2',
                            borderBottomWidth: 1,
                            // marginBottom: 24,
                        }}></View>} */}
                </Fragment>
            )
        ) : <Text>You don't have cards</Text>}</Padding>
    )
}

export default Accounts