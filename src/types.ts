export enum TRANSACTIONS {
    RECEIPT = "receipt",
    PAYMENT = "payment"
}

export type Customer = {
    name: string,
    CPF: string,
    birthday: string,
    availableCredit: number
}

export type AccountExtract = {
    receipt: string,
    payment: string,
    date: string,
    description: string
}