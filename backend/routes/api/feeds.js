const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Post } = require('../../db/models');

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

// router.get('/cottagedam', asyncHandler(async(req, res) => {
//     const cottagedamPosts = await Post.findAll({
//        where: {
//           continentId: 8
//        }
//     });
//     res.json({ cottagedamPosts })
// }));

// router.get('/alchemis', asyncHandler(async(req, res) => {
//    const alchemisPosts = await Post.findAll({
//       where: {
//          continentId: 9
//       }
//    });
//    res.json({ alchemisPosts })
// }));

// router.get('/liminaland', asyncHandler(async(req, res) => {
//    const liminalandPosts = await Post.findAll({
//       where: {
//          continentId: 10
//       }
//    });
//    res.json({ liminalandPosts })
// }));

// router.get('/bubblebopia', asyncHandler(async(req, res) => {
//    const bubblebopiaPosts = await Post.findAll({
//       where: {
//          continentId: 11
//       }
//    });
//    res.json({ bubblebopiaPosts })
// }));

// router.get('/yesterway', asyncHandler(async(req, res) => {
//    const yesterwayPosts = await Post.findAll({
//       where: {
//          continentId: 12
//       }
//    });
//    res.json({ yesterwayPosts })
// }));

// router.get('/voidend', asyncHandler(async(req, res) => {
//    const voidenPosts = await Post.findAll({
//       where: {
//          continentId: 13
//       }
//    });
//    res.json({ voidenPosts })
// }));

// router.get('/honeydoe', asyncHandler(async(req, res) => {
//    const honeydoePosts = await Post.findAll({
//       where: {
//          continentId: 14
//       }
//    });
//    res.json({ honeydoePosts })
// }));



module.exports = router;