const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Post, Continent } = require('../../db/models');

router.get(['/', '/all'], asyncHandler(async(req, res) => {
   const allPosts = await Post.findAll({
      order: [['createdAt', 'ASC']]
   });
   res.json({ allPosts })
}));

router.get('/:continentId', asyncHandler(async(req, res) => {
   const contId = parseInt(req.params.continentId, 10);
   const continentPosts = await Post.findAll({
         where: {
            continentId: contId
          }
      });
   res.json({ continentPosts });
}));

router.get('/continents', asyncHandler(async(req, res) => {
   const list = await Continent.findAll();
   res.json({ list });
}));


module.exports = router;