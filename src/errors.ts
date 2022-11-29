import * as types from './types'

/* explicação para os colegas: aqui eu crio os meus erros separadamente, assim eu só preciso importar os componentes para a const
err que eu crio e lanço dentro dos meus try. Um exemplo está no endpoint GET que eu criei em index.ts */

export const dataNotFound:types.Err = {
    code: 404,
    name: "dataNotFound",
    message: "Sorry, we couldn't find the information you're looking for. Please, check your URL and try again."
}

export const duplicateAccountCreationAttempt:types.Err = {
    code: 403,
    name:"duplicateAccountCreationAttempt",
    message:"This CPF is already linked to an Existing Account. Please, login with your credentials."
}

export const internalServerError:types.Err = {
    code: 500,
    name: "internalServerError",
    message: "500 Internal Server Error"
}

export const userUnderEighteenYearsOld:types.Err = {
    code: 400,
    name: 'userUnderEighteenYearsOld',
    message: 'You must be over 18 to create an account.'
}