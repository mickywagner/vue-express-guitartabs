const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10
            })
            console.log('looking for songs')
            res.send(songs)

        } catch (error) {
            console.log('in the catch')
            res.status(500).send({
                message: 'An error occured while fetching songs'
            })
        }
    },

    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (error) {
            res.status(500).send({
                error: 'An error occurred while creating song'
            })
        }
    }
}