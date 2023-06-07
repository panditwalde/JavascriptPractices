
const express = require('express')
const router = express.Router();

const TodoController = require('../controller/TodoController')


router.get("/todo", TodoController.get)
router.post("/todo", TodoController.add)
router.put("/todo", TodoController.update)
router.delete("/todo", TodoController.delete)

module.exports = router