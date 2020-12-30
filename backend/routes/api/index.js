const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const shopRouter = require('./shop.js');
const postsRouter = require('./posts.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/shop', shopRouter);

router.use('/posts', postsRouter);

module.exports = router;


//USER AUTH MIDDLEWARE TEST ROUTES
// GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

//FRONT-END TEST ROUTE
// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });
