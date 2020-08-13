const { 
    History,
    Song,
    User 
} = require("../models");
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const {userId} = req.query
            const histories = await History.findAll({
                where: {
                    UserId: userId
                },
                include: [
                    {
                      model: Song
                    }
                  ]
            })

            const mappedHistory = histories.map(history => history.toJSON()).map(history => _.extend(
                {},
                history.Song,
                history
            ))

            res.send(mappedHistory)
        } catch (err) {
            res.status(500).send({
                message: 'Failed to fetch history'
            })
        }
    },
    async post (req, res) {
        try {
            const {songId, userId} = req.body
            const history = await History.create({
                SongId: songId,
                UserId: userId
            })
            res.status(200).send(history)
        } catch (err) {
            res.status(500).send({
                message: 'Failed to create history object'
            })
        }
    }
}