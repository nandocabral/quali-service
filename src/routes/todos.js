const { Router } = require('express')
const router = Router();

const { getTodos } = require('../controllers/todos.js');
// /api/todos
router.get('/', getTodos);
// router.post('/', crearEvento);
// router.delete('/:id', eliminarEvento);
// router.put('/:id', actualizarEvento);

module.exports = { router };