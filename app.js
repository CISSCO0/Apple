const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./Routes/products");
const userRouter = require("./Routes/users");

const cors = require('cors');
app.use(cors()); 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productRouter);
app.use("/users", userRouter);

const db_name = "myApp";
// * Cloud Connection
// const db_url = `mongodb+srv://TestUser:TestPassword@cluster0.lfqod.mongodb.net/${db_name}?retryWrites=true&w=majority`;
// * Local connection
const db_url = `mongodb://localhost:27017/${db_name}`; // if it gives error try to change the localhost to 127.0.0.1


// ! Mongoose Driver Connection


mongoose
  .connect(db_url)
  .then(() => console.log("mongoDB connected"))
  .catch((e) => {
    console.log(e);
  });

app.use(function (req, res, next) {
  return res.status(404).send("404");
});
app.listen(4000, () => {
  console.log("Server is starting...");
  console.log("Server started successfully on port 4000");
});

