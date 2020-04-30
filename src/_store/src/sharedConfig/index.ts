// tslint:disable-next-line
import {currentMode, DO_NOT_IMPORT_isDevMode} from "./devMode";

const isDevMode = DO_NOT_IMPORT_isDevMode;

const devMachineAddress = "http://Stephens-MacBook-Pro.local:3000"; // this should be fixed in future...

const tld = "ray.health";
const apiDomain = (): string => {
    // to use your local server, you can use one of the following settings
    // REACT_APP_API_BASE_URL=https://stagingapi.ray.health   // use staging
    // REACT_APP_API_BASE_URL=//localhost:5000              // for web development
    // REACT_APP_API_BASE_URL=http://localhost:5000         // for iOS development
    // REACT_APP_API_BASE_URL=http://10.0.2.2:5000          // for android development
    if (isDevMode) return devMachineAddress;
    return "https://ray-health-demo.herokuapp.com";
};

const sharedConfig = {
    currentMode,
    isDevMode,
    tld,
    apiDomain: apiDomain(),
    version: "not used", // todo: version.build,
};

export default sharedConfig;
