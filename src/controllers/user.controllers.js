const catchError = require('../utils/catchError');
const User = require('../models/User');

        //   E N D P O I N T S    //

// getAll - To get all users
const getAll = catchError(async(req, res) => {
    const result = await User.findAll()
    return res.json(result)
});

// create - to create one user
const create = catchError(async(req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
})

// getOne - To get one user for id
const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if (!result) return res.sendStatus(404)
    return res.json(result)
})

// destroy - To delete one user for id
const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.destroy({ where: { id } })
    if (!result) return res.sendStatus(404)
    return res.sendStatus(204)
})

// update - To update one user for id
const update = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.update(req.body, {where: { id }, returning: true })
    if (result[0]===0) return res.sendStatus(404)
    return res.json(result[1][0])
    })

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update  
}