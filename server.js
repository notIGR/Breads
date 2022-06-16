//dependencies
const express = require("express");

//configuration
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

//middlelware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

//routes
app.get("/", (req, res) => {
  res.send("Welcome to an awesom website about Breads!");
});

//breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

// 404 page
app.get("*", (req, res) => {
  res.send("404")
})

//listen
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});
