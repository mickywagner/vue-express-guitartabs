const authenticationController = require('./controllers/authenticationController')
const songController = require('./controllers/songController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const userController = require('./controllers/userController')
const bookmarksControlller = require('./controllers/bookmarksController')
const historyController = require('./controllers/historyController')
const IsAuthenticated = require('./policies/IsAuthenicated')

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
    app.get('/users', userController.index),

    app.get('/bookmarks', IsAuthenticated, bookmarksControlller.index)
    app.post('/bookmarks', IsAuthenticated, bookmarksControlller.post)
    app.delete('/bookmarks/:bookmarkId', IsAuthenticated, bookmarksControlller.delete),

    app.get('/histories', historyController.index),
    app.post('/histories', historyController.post)
}