import * as types from './types'

export const allCustomers: types.Customer[] = [
    {
        name: "Rafael",
        CPF: "889.996.754-65",
        birthday: "22-01-1983",
        availableCredit: 0,
        transactions:[
            {
                receipt: 200,
                payment:20,
                date:"19-10-2022",
                description:"Sandwicheria do Alan"
            }
        ]
    },
    {
        name: "Stephany",
        CPF: "321.789.943-68",
        birthday: "03-04-2003",
        availableCredit: 0
        transactions:[
            {
                receipt: 200,
                payment:20,
                date:"19-10-2022",
                description:"Sandwicheria do Alan"
            }
        ]
    },
    {
        name: "Alessandro",
        CPF: "542.927.645-23",
        birthday: "28-03-1995",
        availableCredit: 0
        transactions:[
            {
                receipt: 200,
                payment:20,
                date:"19-10-2022",
                description:"Sandwicheria do Alan"
            }
        ]
    }
]