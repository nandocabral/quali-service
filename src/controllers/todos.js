const { todosModel } = require('../models/sequelize')

const getTodos = async (req, res) => {
  const todos = await todosModel.findAll()
  return res.json(todos)
}

const getTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await todosModel.findByPk(id)
  return res.json(todo)
}

const addTodo = async (req, res) => {
  try {
    const model = req.body;
    const result = await todosModel.create(model)
    return res.json(result)
  } catch (error) {
    console.log(error);
    return res.status(400).json({
        mensaje: 'Unable to insert data',
        errors: error
    });
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const model = req.body;
    const result = await todosModel.update(model, { where: { id } })
    return res.json(result)
  } catch (error) {
    console.log(error);
    return res.status(400).json({
        mensaje: 'Unable to insert data',
        errors: error
    });
  }
}

const updateCompleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await todosModel.update({ completed: true }, { where: { id } })
    return res.json(result)
  } catch (error) {
    console.log(error);
    return res.status(400).json({
        mensaje: 'Unable to insert data',
        errors: error
    });
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const result = await todosModel.destroy({
      where: {
        id
      }
    });
    return res.json(result)
  } catch (error) {
    console.log(error);
    return res.status(400).json({
        mensaje: 'Unable to delete data',
        errors: error
    });
  }
}

module.exports = {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
  updateCompleteTodo,
}