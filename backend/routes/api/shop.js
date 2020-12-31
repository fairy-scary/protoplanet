const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Shop, Product, Post } = require('../../db/models');

router.get(['/', '/all'], asyncHandler(async(req, res) => {
    const allShops = await Shop.findAll();
    res.json({ allShops });
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
    res.json({ allShopProducts })
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
    res.json({ postProducts })
}));

module.exports = router;