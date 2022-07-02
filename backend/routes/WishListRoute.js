const express = require("express");
const { addToWishlist, getWishlistData, removeWishlistData, addToCart, getCartData, removeCartData } = require("../controller/CartController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/wishlist").get(isAuthenticatedUser, getWishlistData);

router.route("/addToWishlist").post(isAuthenticatedUser, addToWishlist);

router.route("/removeWishlist").delete(isAuthenticatedUser, removeWishlistData);

router.route("/addToCart").post(isAuthenticatedUser, addToCart);

router.route("/cart").get(isAuthenticatedUser, getCartData);

router.route("/removeCart").delete(isAuthenticatedUser, removeCartData);

module.exports = router;
