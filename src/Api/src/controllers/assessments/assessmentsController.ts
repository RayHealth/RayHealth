import express, {Request, Response} from "express";
import {handleMongooseCollectionAsync} from "../utils";
import Assessments, {assessmentsToJson} from "../../models/assessments/assessments";
import serverConfig from "../../config";

const r = express.Router();

const addRoutes = (router) => {
    // GET INDEX
    router.get("/", async (req: Request, res: Response) => {
        const [assessments, assessmentsError] = await handleMongooseCollectionAsync(
            Assessments.find(),
        );
        if (assessmentsError)
            return res.status(500).send(serverConfig.isDevMode && assessmentsError);
        if (!assessments) return res.status(200).send([]);
        return res.status(200).send(assessments.map(assessmentsToJson));
    });

    // NEW ASSESSMENT
    router.post("/", async (req: Request, res: Response) => {
        console.log("Save these:");
        console.log(req.body);
        return res.status(204).send();
    });
    return router;
};

export default addRoutes(r);
