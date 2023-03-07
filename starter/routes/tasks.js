const express = require("express");
var cors = require("cors");
const router = express.Router();

router.use(cors());
const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks");
//routes
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

//all the routes
//app.get('/api/v1/tasks') -get all tasks
//app.post('/api/v1/tasks') -create a new tasks
//app.get('/api/v1/tasks/:id') -get a single task
//app.patch('/api/v1/taks/:id)-update task
//app.delete('/api/v1/tasks/:id) -delete task

module.exports = router;
