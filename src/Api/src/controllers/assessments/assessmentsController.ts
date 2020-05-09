import express, {Request, Response} from "express";
import {handleMongooseCollectionAsync} from "../utils";
import Assessments, {
    assessmentsToJson,
    saveNewAssessment,
    SaveResponse,
} from "../../models/assessments/assessments";
import serverConfig from "../../config";
import {AssessmentSaveServerResponse} from "@reduxShared/models/assessments/constants";
import sharedConfig from "@reduxShared/sharedConfig";

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

        const saveItems = await Promise.all(
            [...req.body.assessments].map(saveNewAssessment),
        );
        console.log(saveItems);
        const response = saveItems.reduce(
            (
                acc: AssessmentSaveServerResponse,
                item: SaveResponse,
            ): AssessmentSaveServerResponse => {
                if (item[0]) {
                    return {
                        ...acc,
                        savedSuccessfully: [...acc.savedSuccessfully, item[0]],
                    };
                } else if (item[1]) {
                    return {
                        ...acc,
                        failed: [...acc.failed, item[1]],
                        failedMessage:
                            sharedConfig.isDevMode && item[2]
                                ? [
                                      ...acc.failedMessage,
                                      {
                                          id: item[1],
                                          message: JSON.stringify(item[2]),
                                      },
                                  ]
                                : [],
                    };
                }
                return acc;
            },
            {
                savedSuccessfully: [],
                failed: [],
                failedMessage: [],
            },
        );
        console.log(response);
        return res.status(200).send(response);
    });
    return router;
};

export default addRoutes(r);
