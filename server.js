const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

//Env Veriables
dotenv.config({
  path: "./env/config.env",
});
connectDatabase();
const app = express();
//Express body middlewware,
app.use(express.json());
const PORT = process.env.PORT;

//Routers Middleware

app.use("/api", routers);
//Error Handler
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});
