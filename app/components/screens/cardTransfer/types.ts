type iCurrency = 'RUB' | 'USD'

export interface ITransaction {
    Amount: number
    Currency: string
    Date: string
    Time: string
    Recipient: string
    RecipientCardNumber: string
    Sender: string
    TransferType: string
}