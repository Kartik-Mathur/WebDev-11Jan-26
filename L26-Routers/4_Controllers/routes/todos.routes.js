const path = require('path');
const express = require('express');
const { increasePriority, decreasePriority, deleteTodo, addTodo, myapp } = require('../controllers/todos.controller');
const router = express.Router();

router.get('/increase/:id', increasePriority)
router.get('/decrease/:id', decreasePriority)
router.get('/delete-todos/:id', deleteTodo)
router.post('/todos', addTodo)
router.get('/todos', (req, res) => {
    res.send(todos);
})

router.get('/app', myapp);


module.exports = router;