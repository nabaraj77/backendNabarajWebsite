const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());

const dotenv = require("dotenv").config();
const cors = require("cors");
app.use(cookieParser());

//CONNECTING TO MONGODB calling the function
require("./initDB")();

//CORS
app.use(
  cors({
    allowedHeaders: "*",
    allowMethods: "*",
    origin: "*",
  })
);

//User Authentication login sign and JWT Verification Section
const UserRoute = require("./Routes/User.route");
app.use("/api", UserRoute);

//Message Route
const MessageRoute = require("./Routes/Message.route");
app.use("/api", MessageRoute);

//Projects Route
const ProjectRoute = require("./Routes/Project.route");
app.use("/api", ProjectRoute);

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at port${PORT}`);
});
