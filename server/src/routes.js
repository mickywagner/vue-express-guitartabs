const authenticationController = require('./controllers/authenticationController')
const songController = require('./controllers/songController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        authenticationController.register)
    
    app.post('/login', 
    authenticationController.login)

    app.get('/songs',
        songController.index
    )
}