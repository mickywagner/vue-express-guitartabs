const { Song, Sequelize } = require("../models");
const Op = Sequelize.Op

module.exports = {
  async index(req, res) {
    try {
      let songs = null
      const search = req.query.search
      
      if (search) {
        songs = await Song.findAll({
            where: {
                [Op.or]: [
                    'title', 'artist', 'genre', 'album'
                ].map(key => ({
                    [key]: {
                        [Op.like]: `%${search}%`
                    }
                }))
                // [Op.or]: [
                //     {title: search},
                //     {artist: search},
                //     {genre: search},
                //     {album: search}
                // ]
            }
        })
      } else {
        songs = await Song.findAll({
          limit: 10,    
        });
      }
      res.send(songs);
    } catch (error) {
      res.status(500).send({
        message: "An error occured while fetching songs",
      });
    }
  },

  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error: "An error occurred while creating song",
      });
    }
  },

  async show(req, res) {
    try {
      const song = await Song.findOne({ where: { id: req.params.songId } });
      res.send(song);
    } catch (error) {
      res.status(500).send({
        message: "Error occurred when fetching song",
      });
    }
  },

  async put(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId,
        },
      });
      res.send(this.body);
    } catch (err) {
      res.status(500).send({
        message: "Error occured while trying to save song",
      });
    }
  },
};
