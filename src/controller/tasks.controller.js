import tasksServices from '../services/tasks.services.js'

const getTasks = (req, res) => {
    try{
        const allTasks = tasksServices.getAllTasks();
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
};

const addTask = (req, res) => {
    try{
        const newTask = tasksServices.addATask(req.body);
        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        return(error);
    }
};

export default {getTasks, addTask};