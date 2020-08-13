const { User } = require("../models");

module.exports = {
    async index(req, res) {
        try {
            console.log('hello')
        } catch (err) {
            console.log(err)
        }
    },
    async post (req, res) {
        try {
            console.log('hello')
        } catch (err) {
            console.log(err)
        }
    }
}