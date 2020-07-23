const authenticationController = require('./controllers/authenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        authenticationController.register
)}