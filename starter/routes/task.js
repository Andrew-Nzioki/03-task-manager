const express=require('express')
const router=express.Router()


//routes
router.route('/').get((req,res)=>{
    res.send('all task items')
})


//all the routes
//app.get('/api/v1/tasks') -get all tasks
//app.post('/api/v1/tasks') -create a new tasks
//app.get('/api/v1/tasks/:id') -get a single task
//app.patch('/api/v1/taks/:id)-update task
//app.delete('/api/v1/tasks/:id) -delete task

module.exports=router