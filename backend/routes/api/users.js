const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Order, Favorite } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const users = await User.findAll();
  res.json({ users });
}));

router.get('/:id', asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = await User.findByPk(userId);
  res.json({ user });
}));

router.get('/:id/orders', asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.id, 10);
  const orders = await Order.findAll({
    where: {
      userId: userId
    }
  });
  res.json({ orders })
}));

router.get('/:id/favorites', asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.id, 10);
  const favorites = await Favorite.findAll({
    where: {
      userId: userId
    }
});
  res.json({ favorites })
}));

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];
  
// Sign up
router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );



module.exports = router;