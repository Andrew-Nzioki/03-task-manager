const express =require('express')
const app = express();
const tasks=require('./routes/task')

//middleware
app.use(express.json())
app.use('/api/v1/tasks',tasks)

//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager app')
})




const port=3000
app.listen(port,console.log(`server is listen on port ${port}`))


