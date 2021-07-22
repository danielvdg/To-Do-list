const request = require('supertest')
const app = require('../app')


describe('Testando rotas de usuário',()=>{
    it('POST /users certo', async () =>{
        const response = await request(app)
        .post('/users')
        .send({
            nome:'Emilly',
            email:'email@email.com',
            senha:'*******'
        })
        expect(response.body.error).toBe(false)
    })

    it('GET /users ', async () =>{
        const response = await request(app)
        .get('/users')
        expect(response.body).toHaveProperty('result')
    })
})