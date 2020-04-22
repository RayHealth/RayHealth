import express, {Request, Response} from "express";

const r = express.Router();

const addRoutes = (router) => {
    // GET INDEX
    router.get("/", async (req: Request, res: Response) => {
        return res.status(200).send([]);
    });

    // NEW ASSESSMENT
    router.post("/", async (req: Request, res: Response) => {
        console.log(req.body);
        return res.status(204).send();
    });
    return router;
};

export default addRoutes(r);
