const { Router } = require('express')
const router = Router();

const { getTodos, getTodo, addTodo, deleteTodo, updateTodo, updateCompleteTodo } = require('../controllers/todos.js');
// /api/todos
router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);
router.patch('/:id', updateCompleteTodo);

module.exports = { router };