const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers");

const port = 3008;

const app = express();
app.use(bodyParser.json());

app.get("/api/data/get", (req, res) => {});

app.post("/api/data/:paramsVar", (req, res) => {});

app.listen(port, () => console.log("Magic Happens at Port: " + port));

//   console.log("req.params.paramsVar", req.params.paramsVar);
//   console.log("req.body.bodyVar", req.body);
//   res.status(200).send("great");
