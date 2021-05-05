const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
require('dotenv').config()
require("../models/Associations");

app.use(cors());
app.use(express.static("uploads"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const adminRoutes = require("../routes/Admin");
const mercadoriasRoutes = require("../routes/Mercadoria");

app.use("/admin",adminRoutes);
app.use("/mercadoria",mercadoriasRoutes);

app.listen(3333);