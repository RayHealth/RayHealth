export enum DevMode {
    Production,
    Development,
    Test,
    Staging,
}

export let currentMode: DevMode;

if (process.env.NODE_ENV == null) {
    currentMode = DevMode.Development;
}
switch ((process.env.NODE_ENV as string).toLowerCase()) {
    case "development":
        currentMode = DevMode.Development;
        break;
    case "test":
        currentMode = DevMode.Test;
        break;
    case "staging":
        currentMode = DevMode.Staging;
        break;

    default:
        currentMode = DevMode.Production;
}

// this should only be imported to the config file
export const DO_NOT_IMPORT_isDevMode = currentMode === DevMode.Development;
