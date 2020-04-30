import express, {Request, Response} from "express";
import Locations, {
    LocationDocument,
    locationToJson,
} from "../../models/locations/locations";
import serverConfig from "../../config";
import {handleMongooseCollectionAsync} from "../utils";

const r = express.Router();

const addRoutes = (router) => {
    // GET INDEX
    // router.get("/", async (req: Request, res: Response) => {
    //     const [locations, locationError] = await handleMongooseCollectionAsync(
    //         Locations.find(),
    //     );
    //     if (locationError)
    //         return res.status(500).send(serverConfig.isDevMode && locationError);
    //     if (!locations) return res.status(200).send([]);
    //     return res.status(200).send(locations.map(locationToJson));
    // });

    // GET COURSE
    router.get("/:lat/:lng", async (req: Request, res: Response) => {
        const [course, courseError] = await handleMongooseCollectionAsync<
            LocationDocument
        >(
            Locations.find(
                {
                    location: {
                        $near: [1.4072964, 7.826107],
                        $maxDistance: 1,
                    },
                },
                (err, result) => {
                    result.forEach((doc) => {
                        console.log(doc.location);
                    });
                },
            ),
        );
        if (courseError)
            return res.status(500).send(serverConfig.isDevMode && courseError);
        if (!course) return res.status(404).send();
        return res.status(200).send(course.map(locationToJson));
    });

    // NEW COURSE
    // router.post("/", checkJwtAuthentication, async (req: AuthRequest, res: Response) => {
    //     const userId = req.user.sub;
    //     const {value, error} = validateCourse(req.body);
    //     if (error) return res.status(400).send({error: error.message});
    //
    //     const [course, courseError] = await handleAsync(
    //         Locations.create({name: value.name, userId}),
    //     );
    //     if (courseError) return res.status(500).send(config.isDevMode && courseError);
    //     return res.status(200).send(course);
    // });

    // UPDATE COURSE
    // router.put(
    //     "/:id",
    //     checkJwtAuthentication,
    //     async (req: AuthRequest | any, res: Response) => {
    //         // validate input
    //         const {value, error} = validateCourse(req.body);
    //         if (error) return res.status(400).send({error: error.message});
    //         // get course to update
    //         const [course, courseError] = await handleMongooseAsync(
    //             Locations.findOneAndUpdate({_id: req.params.id}, value),
    //         );
    //         if (courseError) return res.status(500).send(config.isDevMode && courseError);
    //         if (!course) return res.status(404).send();
    //         return res.status(200).send(course);
    //     },
    // );

    // DELETE COURSE
    // router.delete(
    //     "/:id",
    //     checkJwtAuthentication,
    //     async (req: AuthRequest | any, res: Response) => {
    //         const [course, courseError] = await handleMongooseAsync(
    //             Locations.findOneAndDelete({_id: req.params.id}),
    //         );
    //         if (courseError) return res.status(500).send(config.isDevMode && courseError);
    //         if (!course) return res.status(404).send("Locations not found");
    //         return res.status(200).send();
    //     },
    // );
    return router;
};

export default addRoutes(r);
