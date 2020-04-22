import assessmentsController from "./controllers/assessments/assessmentsController";

require("module-alias/register");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@reduxShared", __dirname + "/../../_store/src");

import express from "express";
import cors from "cors";

import connectToMongoDb from "./services/connectToMongoDb";
import corsOptions from "./corsOptions";

import locationsController from "./controllers/locations/locationsController";

console.log("add newRelic");
console.log("add check for invalid JSON in body");
connectToMongoDb();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) =>
    res.send(
        "Are you interested in helping develop ray.health? Find us on Github to get involved.",
    ),
);
app.use("/v1/assessments", assessmentsController);
app.use("/v1/locations", locationsController);

app.listen(port, () => {
    console.log(`App is running on //${host}:${port}/`);
});
