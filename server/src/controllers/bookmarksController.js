const { Bookmark, Sequelize } = require("../models");
const Op = Sequelize.Op

module.exports = {
  async index(req, res) {
      const bookmarks = await Bookmark.findAll()
      res.send(bookmarks)
  }
};
