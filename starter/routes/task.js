const express=require('express')
const router=express.Router();

//middleware
app.use(express.json())
//routes
router.router('/',(req,res)=>{
    res.send('all items')
})

//middleware
app.use('/api/v1/tasks',tasks)

//all the routes
//app.get('/api/v1/tasks') -get all tasks
//app.post('/api/v1/tasks') -create a new tasks
//app.get('/api/v1/tasks/:id') -get a single task
//app.patch('/api/v1/taks/:id)-update task
//app.delete('/api/v1/tasks/:id) -delete task

