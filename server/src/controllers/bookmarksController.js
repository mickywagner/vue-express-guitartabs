const { Bookmark, Sequelize } = require("../models");
const Op = Sequelize.Op

module.exports = {
  async index(req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      return res.send(bookmark || null)
    } catch (error) {
      res.status(500).send({
        message: "An error occured while fetching bookmark",
      });
    }
  },

  async post(req, res) {
    try {
      const {songId, userId} = req.body

      console.log(req.body)
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      
      if(bookmark) {
        return res.status(400).send({
          error: 'Bookmark already exists'
        })
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        message: "Error adding bookmark"
      })
    }
  },

  async delete(req, res) {
    try {
      const {bookmarkId} = req.params
    
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId
        }
      })
      await bookmark.destroy()
      res.status(200).send({
        message: "Bookmark deleted"
      })
    } catch (err) {
      res.status(500).send({
        message: "Error deleting bookmark"
      })
    }
  }
};
