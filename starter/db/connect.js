const mongoose = require("mongoose");

//connectDB().catch((err) => console.log(err));

const connectDB = (url) => {
  return mongoose
    .connect(
      "mongodb+srv://12345:12345@cluster0.smowbqk.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected now to the DB..."))
    .catch((err) => console.log(err));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};
module.exports = connectDB;
