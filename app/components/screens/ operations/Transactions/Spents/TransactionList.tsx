import tw from "twrnc";
import {Text, TouchableHighlight, View} from "react-native";
import {ITransaction} from "../../../../../types/ITransaction";
import {IAccount} from "../../../../../types/IAccount";

function formatDate(inputDate: string): string {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    const [day, month, year] = inputDate.split('.');
    const dateObject = new Date(`${year}-${month}-${day}`);
    const monthName = months[dateObject.getMonth()];
    const dayOfWeek = daysOfWeek[dateObject.getDay()];

    return `${day} ${monthName}, ${dayOfWeek}`;
}

function groupTransactionsByDate(transactions: ITransaction[]): { [date: string]: ITransaction[] } {
    const groupedTransactions: { [date: string]: ITransaction[] } = {};

    transactions.forEach((transaction) => {
        const date = transaction.Date;

        // Перевірка, чи існує вже масив для даної дати
        if (!groupedTransactions[date]) {
            groupedTransactions[date] = [];
        }

        // Додавання поточної транзакції до відповідного масиву
        groupedTransactions[date].push(transaction);
    });

    return groupedTransactions;
}


const TransactionList: React.FC<{ transactions: ITransaction[], account: IAccount }> = ({transactions, account}) => {
// Функція для групування транзакцій за датою

// Виклик функції для групування транзакцій
    const groupedTransactions = groupTransactionsByDate(transactions);

// groupedTransactions тепер містить об'єкт, де ключі - це дати, а значення - масиви транзакцій для кожної дати
    console.log(groupedTransactions);


    return (
        <View style={tw``}>
            {
                Object.keys(groupedTransactions).map((item, index) => (
                    <View>
                        <View style={tw`rounded-lg bg-neutral-200`}>
                            <Text
                                style={tw` p-2 px-3 text-lg text-neutral-600`}>{formatDate(item)}</Text>
                        </View>
                        {
                            groupedTransactions[item].map(transaction => (
                                <TouchableHighlight
                                    onPress={() => {
                                    }}
                                    underlayColor={'#ccc'}
                                    style={tw`rounded-lg`}
                                >
                                    <View>
                                        <View style={tw`my-2 h-[1px] w-full bg-neutral-400`}></View>
                                        <View style={tw`flex-row items-center justify-between my-2`}>
                                            <View style={tw`flex-row gap-2`}>
                                                <View
                                                    style={tw`h-10 w-10 rounded-full bg-neutral-300 items-center justify-center`}>
                                                    <Text
                                                        style={tw`text-xl text-neutral-600`}>{transaction.Recipient.at(0)}</Text>
                                                </View>
                                                <View style={tw`justify-between`}>
                                                    <Text style={tw`text-neutral-500`}>{account?.name}</Text>
                                                    <Text style={tw`font-medium text-lg`}>{transaction.Recipient}</Text>
                                                </View>
                                            </View>
                                            <View style={tw``}></View>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            ))
                        }
                    </View>
                ))
            }
        </View>
    )
}

export default TransactionList


