const authenticationController = require('./controllers/authenticationController')
const songController = require('./controllers/songController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const userController = require('./controllers/userController')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        authenticationController.register)
    
    app.post('/login', 
    authenticationController.login)

    app.get('/songs',
        songController.index
    )
    app.post('/songs',
        songController.post
    ),
    app.get('/songs/:songId', songController.show),
    app.put('/songs/:songId', songController.put),
    app.get('/users', userController.index)
}