import {DO_NOT_IMPORT_isDevMode} from "./devMode";

const serverConfig = {
    isDevMode: DO_NOT_IMPORT_isDevMode,
    mongoDbUri: process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/local",
};

export default serverConfig;
