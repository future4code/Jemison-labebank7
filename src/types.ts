export enum TRANSACTIONS {
    RECEIPT = "receipt",
    PAYMENT = "payment",
    TRANSFER = "transfer"
}

export type Customer = {
    name: string,
    CPF: string,
    birthday: string,
    availableCredit: number,
    transactions: AccountExtract[]
}

export type AccountExtract = {
    transaction: TRANSACTIONS,
    date: string,
    description: string,
    value: number
}

export type Err = {
    code: number,
    name: string,
    message: string
}