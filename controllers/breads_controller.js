const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

//index
breads.get("/", (req, res) => {
  Bread.find().then((foundBreads) => {
    res.render("Index", {
      breads: foundBreads,
      title: "Index Page",
    });
  });

  //res.send(Bread)
});

// create
breads.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.create(req.body);
  res.redirect("/breads");
});

//delete
breads.delete("/:indexArray", (req, res) => {
  Bread.splice(req.params.indexArray, 1);
  res.status(303).redirect("/breads");
});

//new
breads.get("/new", (req, res) => {
  res.render("new");
});

//edit
breads.get("/:indexArray/edit", (req, res) => {
  res.render("edit", {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray,
  });
});

//update
breads.put("/:arrayIndex", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread[req.params.arrayIndex] = req.body;
  res.redirect(`/breads/${req.params.arrayIndex}`);
});

//show
breads.get("/:id", (req, res) => {
  Bread.findById(req.params.id)
    .then((foundBread) => {
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch((err) => {
      res.send("404");
    });
});

module.exports = breads;
