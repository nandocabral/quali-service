const { todosModel } = require('../models/sequelize')

const getTodos = (req, res) => {
  console.log(todosModel)
  return todosModel.findAll().then((todos) => res.json(todos))
}

module.exports = {
  getTodos
}