import express from "express";
import bodyParser from "body-parser";
import "./config/env.config";
import {buildResponse} from "./helpers/response";
import {sequelize} from "./config/database.config";
import {User} from "./models/user";

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/test", async (req, res) => {
     try {
         const result = await sequelize.authenticate();
         res.status(200).send(buildResponse(true, "Connection to database successfully established"));
     } catch (e) {
         res.status(400).send(buildResponse(false, "Connection to Database failed"));
     }
});

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