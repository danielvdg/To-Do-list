const db = require('../infra/sqlite-db')
const UserDAO = require('../DAO/UserDAO')
const User = require('../models/UserModel')

describe('Testando operaçoes DAO users', () =>{
    
    it('Criando Usuario', async () => {
        const userBanco = new UserDAO(db);
        let response = await userBanco.insertUser(new User('Emerson','email@email.com','*********'))
        expect(response).toBeTruthy()
    })

    it('Obtendo Usuarios', async () => {
        const userBanco = new UserDAO(db);
        let response = await userBanco.getAllUsers()
        expect(Array.isArray(response)).toBeTruthy()
    })
})
