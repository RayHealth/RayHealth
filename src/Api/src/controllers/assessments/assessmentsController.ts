import express, {Request, Response} from "express";

const r = express.Router();

const addRoutes = (router) => {
    // NEW ASSESSMENT
    router.post("/", async (req: Request, res: Response) => {
        return res.status(200).send("winning");
    });
    return router;
};

export default addRoutes(r);
