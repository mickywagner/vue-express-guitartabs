const { 
  Bookmark,
  Song,  
} = require("../models");
const _ = require('lodash')

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }

      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })

      const mapped = bookmarks.map(bookmark => bookmark.toJSON()).map(bookmark => _.extend(
        {},
        bookmark.Song,
        bookmark
      ))

      res.send(mapped)
    } catch (error) {
      res.status(500).send({
        message: "An error occured while fetching bookmark",
      });
    }
  },

  async post(req, res) {
    try {
      const userId = req.user.id

      const {songId} = req.body

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
