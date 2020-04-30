import sharedConfig from "@reduxShared/sharedConfig";

const serverConfig = {
    isDevMode: sharedConfig.isDevMode,
    mongoDbUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/local",
};

export default serverConfig;
