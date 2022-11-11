export type Customer = {
    name: string,
    CPF: string,
    birthday: string,
    availableCredit: number,
    transactions: AccountExtract[]
}

export type AccountExtract = {
    receipt: number,
    payment: number,
    date: string,
    description: string
}