import {connect} from "mongoose";
import serverConfig from "../config";

export default (): Promise<void> =>
    connect(serverConfig.mongoDbUri as string, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(
        () => {
            console.log("Successfully connected to MongoDb");
        },
        (err: any) => {
            console.log(err.message);
        },
    );
