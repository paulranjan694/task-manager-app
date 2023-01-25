
const express = require("express");
const app = express();
const taskRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.static('./public')) //static files
app.use(express.json())

// routes
app.get("/hello", (req,res)=>{
    res.send("Task Manager App");
})

app.use("/api/v1/tasks", taskRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`server is listening to ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
}

start();

 