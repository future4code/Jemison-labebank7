import * as types from './types'

export const allCustomers: types.Customer[] = [
    {
        name: "Rafael",
        CPF: "889.996.754-65",
        birthday: "22-01-1983",
        availableCredit: 0,
        transactions: [
            {
                transaction: types.TRANSACTIONS.RECEIPT,
                value: 6000,
                date: "19-10-2022",
                description: "Valtec"
            },
            {
                transaction: types.TRANSACTIONS.PAYMENT,
                value: 50,
                date: "19-10-2022",
                description: "Sandwicheria do Alan"
            }
        ]
    },
    {
        name: "Stephany",
        CPF: "321.789.943-68",
        birthday: "03-04-2003",
        availableCredit: 0,
        transactions: [
            {
                transaction: types.TRANSACTIONS.RECEIPT,
                value: 6000,
                date: "19-10-2022",
                description: "MICROSOFT INC"
            },
            {
                transaction: types.TRANSACTIONS.PAYMENT,
                value: 200,
                date: "22-10-2022",
                description: "Academia Cross Fit"
            },
            {
                transaction: types.TRANSACTIONS.PAYMENT,
                value: 75,
                date: "22-10-2022",
                description: "PetShop Bob Esponja"
            }
        ]
    },
    {
        name: "Alessandro",
        CPF: "542.927.645-23",
        birthday: "28-03-1995",
        availableCredit: 0,
        transactions: [
            {
                transaction: types.TRANSACTIONS.RECEIPT,
                value: 6000,
                date: "05-10-2022",
                description: "Amazon"
            },
            {
                transaction: types.TRANSACTIONS.PAYMENT,
                value: 90,
                date: "22-10-2022",
                description: "Telefônica Fale +"
            }
        ]
    }
]