const Task = require('../models/taskModel');

// Create a new task
const createTask = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ error: 'Name and description are required' });
        }
        const task = await Task.create({ name, description });
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create task' });
    }
};

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

module.exports = { createTask, getTasks };
