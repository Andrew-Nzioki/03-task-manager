const Task = require("../models/Task");

//Get all Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
//Create one Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Get a single Task
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID }).exec();
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID}` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//update a single Task
const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};
const deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
