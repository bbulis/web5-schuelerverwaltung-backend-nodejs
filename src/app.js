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
         await User.sync({force: true});
         res.status(200).send(buildResponse(true, "Connection to database successfully established and database reseted"));
     } catch (e) {
         res.status(400).send(buildResponse(false, "Connection to Database failed"));
     }
});

app.get("/student", async (req, res) => {
    try {
        const students = await User.findAll();
        if (students.length > 0) {
            res.status(200).send(buildResponse(true, students))
        } else {
            res.status(400).send(buildResponse(false, "No students found"));
        }
    } catch (e) {
        res.status(400).send(buildResponse(false, e));
    }
});

app.post("/student", async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const schoolclass = req.body.schoolclass;
    const subject = req.body.subject;
    const rating = req.body.rating;
    try {
        const [user, created] = await User.findOrCreate({
            where: {
                firstname,
                lastname,
            },
            defaults: {
                schoolclass,
                subject,
                rating,
            }
        });
        if (!created) {
            res.status(409).send(buildResponse(false, "Student already exists"));
        } else {
            res.status(201).send(buildResponse(true, user));
        }
    } catch (e) {
        res.status(400).send(buildResponse(false, "Invalid Input", e));
    }
});

app.get("/student/:id", async (req, res) => {
    try {
        const student = await User.findByPk(req.params.id);
        if (student) {
            res.status(200).send(buildResponse(true, student));
        } else {
            res.status(400).send(buildResponse(false, "Student not found"));
        }
    } catch (e) {
        res.status(500).send(buildResponse(false, "Internal server error", e));
    }
});

app.put("/student/:id", async (req, res) => {
    const id = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const schoolclass = req.body.schoolclass;
    const subject = req.body.subject;
    const rating = req.body.rating;

    try {
        await User.update({
            firstname: firstname,
            lastname: lastname,
            schoolclass: schoolclass,
            subject: subject,
            rating: rating
        }, {
            where: {
                id: id
            }
        });

        const student = await User.findByPk(id);
        res.status(200).send(buildResponse(true, student));
    } catch (e) {
        res.status(500).send(buildResponse(false, "Internal Server Error", e))
    }
});

app.delete("/student/:id", async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send(buildResponse(true, "student was successfully deleted"))
    } catch (e) {
        res.status(500).send(buildResponse(false, "Internal server error", e));
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
});
