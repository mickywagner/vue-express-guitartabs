const {
    sequelize, 
    Song, 
    User,
    Bookmark,
    History
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./history.json')
const { delay } = require('bluebird')

sequelize.sync({force: true})
    .then(async function() {
        await Promise.all(
            users.map(user => {
              User.create(user)
            })
        )

        await Promise.all(
            songs.map(user => {
                Song.create(user)
            })
        )

        await delay(1000)

        await Promise.all(
            bookmarks.map(bookmark => {
                Bookmark.create(bookmark)
            })
        )

        await Promise.all(
            histories.map(history => {
                History.create(history)
            })
        )
    }).catch(err => {
        console.log(err)
    })