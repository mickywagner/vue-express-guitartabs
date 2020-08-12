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
      res.send(bookmark || null)
    } catch (error) {
      res.status(500).send({
        message: "An error occured while fetching bookmark",
      });
    }
  }
};
