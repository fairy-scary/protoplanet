const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Shop, Product, Post } = require('../../db/models');

router.get(['/', '/all'], asyncHandler(async(req, res) => {
    const allShops = await Shop.findAll();
    res.json({ allShops });
}));

router.get('/:userId', asyncHandler(async(req, res) => {
    const user = parseInt(req.params.userId, 10);
    const myShop = await Shop.findAll({
        where: {
           userId: user
        }
    });
    res.json({ myShop });
}));

router.post('/createshop', asyncHandler(async(req, res) => {
    const { userId, shopName, makerName, shopBio, awsUrl } = req.body;

    const shop = Shop.create({
        userId,
        shopName,
        makerName,
        shopBio,
        awsUrl,
    });
    res.json({ shop })
}));

router.post('/:shopId/delete', asyncHandler(async(req, res) => {
    const shopId = parseInt(req.params.shopId, 10);
    const shop = await Shop.findByPk(shopId);
    await shop.destroy();
    res.redirect('/')
}));

router.get('/:shopId/posts', asyncHandler(async(req, res) => {
    const shopId = parseInt(req.params.shopId, 10);
    const shopPosts = await Post.findAll({
        where: {
            shopId: shopId
        }
    });
    res.json({ shopPosts });
}));

router.get('/:shopId/products', asyncHandler(async(req, res) => {
    const shopId = parseInt(req.params.shopId, 10);
    const allShopProducts = await Product.findAll({
        where: {
            shopId: shopId
        }
    });
    res.json({ allShopProducts });
}));

router.get('/:shopId/products/:postId', asyncHandler(async(req, res) => {
    const shopId = parseInt(req.params.shopId, 10);
    const postId = parseInt(req.params.postId, 10);
    const postProducts = await Product.findAll({
        where: {
            shopId: shopId,
            postId: postId
        }
    });
    res.json({ postProducts });
}));

module.exports = router;