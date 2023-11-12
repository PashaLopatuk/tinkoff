export interface ITransaction {
    _id: string
    Amount: number
    Currency: 'USD' | 'RUB'
    Date: string //"11.11.2023
    Recipient: string //"John"
    RecipientCardNumber: string //"4839 3482 3746 2153"
    Sender: string //"Tomas"
    Time: string //"00:38"
    TransferType: string
}