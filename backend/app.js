require('dotenv').config()
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

//routers


// error handlers


//middleware
app.use(express.json());

//routes


//errors



const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
