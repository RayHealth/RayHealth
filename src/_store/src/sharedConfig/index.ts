// tslint:disable-next-line
import {currentMode, DO_NOT_IMPORT_isDevMode} from "./devMode";

const version = require("../../../version.json");

const isDevMode = DO_NOT_IMPORT_isDevMode;

const devServerAddress = "localhost";

const isAndroid = version.client === "android";
const isIos = version.client === "ios";
const isWebMode = version.client === "web-dev-mode";

const tld = "ray.health";
const apiDomain = (): string => {
    if (!isDevMode) return `https://api.${tld}.com`;
    if (isWebMode) return `http://${devServerAddress}:3000`;
    if (isIos) return `http://${devServerAddress}:3000`;
    if (isAndroid) return "http://10.0.2.2:3000";
    return `http://${devServerAddress}:3000`;
    // to use your local server, you can use one of the following settings
    // REACT_APP_API_BASE_URL=https://stagingapi.zept.ca    // use staging
    // REACT_APP_API_BASE_URL=//localhost:5000              // for web development
    // REACT_APP_API_BASE_URL=http://localhost:5000         // for iOS development
    // REACT_APP_API_BASE_URL=http://10.0.2.2:5000          // for android development
};

const sharedConfig = {
    currentMode,
    isDevMode,
    tld,
    domain: isDevMode ? `http://${devServerAddress}:5000` : `https://www.${tld}`,
    apiDomain: apiDomain(),
    googleTrackingId: "needToSet",
    facebookId: "needToSet",
    enableAnalytics: !isDevMode || false,
    logAnalytics: isDevMode && false,
    version: version.build,
};

export default sharedConfig;
