import express, { Request, Response } from 'express'
import cors from 'cors'
import * as types from './types'
import { allCustomers } from './data'
import * as errors from './errors'


const app = express()

app.use(express.json())

app.use(cors())

// GET endpoint -- users entity

app.get('/users', (req: Request, res: Response) => {
    try {
        if (!allCustomers) {
            const err = {
                code: errors.dataNotFound.code,
                name: errors.dataNotFound.name,
                message: errors.dataNotFound.message
            }
            throw err
        }

        res.status(200).send(allCustomers)

    } catch (e: any) {
        switch (e.name) {
            case 'dataNotFound':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(errors.internalServerError.code).send(errors.internalServerError.message)
        }
    }
})

// POST endpoint -- users entity

app.post('/users', (req: Request, res: Response) => {
    const { name, CPF, birthday } = req.body

    try {
        const newCustomer: types.Customer = {
            name,
            CPF,
            birthday,
            availableCredit: 0,
            transactions: []
        }

        let isExistingAccount = allCustomers.findIndex((item) => item.CPF === newCustomer.CPF)

        if (isExistingAccount !== -1) {
            const err = {
                code: errors.duplicateAccountCreationAttempt.code,
                name: errors.duplicateAccountCreationAttempt.name,
                message: errors.duplicateAccountCreationAttempt.message
            }
            throw err
        } else {
            let newCustomersList: types.Customer[] = [...allCustomers, newCustomer]
            res.status(201).send(newCustomersList)
        }
    } catch (e: any) {
        switch (e.name) {
            case 'duplicateAccountCreationAttempt':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(errors.internalServerError.code).send(errors.internalServerError.message)
        }
    }
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
});