const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

 // Static Routes
userRouter.route("/")
	.get(getAll)
    .post(create)

// Dynamic Routes 
userRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update)

module.exports = userRouter;