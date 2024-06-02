const catchError = require('../utils/catchError');
const User = require('../models/User');

        //   C O N T R O L L E R S      C R U D   //

// getAll -  get all users
const getAll = catchError(async(req, res) => {
    const result = await User.findAll()
    return res.json(result)
});

// create -  create user
const create = catchError(async(req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
})

// getOne -  get one user for id
const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if (!result) return res.sendStatus(404)
    return res.json(result)
})

// destroy -  delete one user for id
const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.destroy({ where: { id } })
    if (!result) return res.sendStatus(404)
    return res.sendStatus(204)
})

// update -  update one user for id
const update = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.update(req.body, {where: { id }, returning: true })
    if (result[0]===0) return res.sendStatus(404)
    return res.json(result[1][0])
    })

    // Exports the controllers
module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update  
}