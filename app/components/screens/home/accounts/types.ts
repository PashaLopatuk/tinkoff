export type TypeCurrency = 'RUB' | 'USD'
export type TypeName = 'Tinkoff Black' | 'Tinkoff All Airlines'

export interface IAccount { 
    _id: string
    userId: string
    ballance: number
    cardNumber: string
    currency: TypeCurrency
    name: TypeName
}