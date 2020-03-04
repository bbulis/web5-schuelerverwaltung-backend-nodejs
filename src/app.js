import express from "express";
import bodyParser from "body-parser";
import "./config/env.config";
import {buildResponse} from "../helpers/response";
import {sequelize} from "./config/database.config";
import {User} from "./models/user";

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/student", (req, res) => {

});

app.post("/student", (req, res) => {

});

app.get("/student/:id", (req, res) => {

});

app.put("/student/:id", (req, res) => {

});

app.delete("/student/:id", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
});