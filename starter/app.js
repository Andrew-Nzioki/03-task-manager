const express = require("express");
var cors = require("cors");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager app");
});

app.use("/api/v1/tasks", cors(), tasks);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listen on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
