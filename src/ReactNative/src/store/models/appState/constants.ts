// We need this for analytics, in order to track location changes,
// and to clear things of the screen when the page changes.
export const SCREEN_CHANGE = "@@router/SCREEN_CHANGE";

export type IAppState = {
    currentScreenPath: string;
};
export const rnAppStateInitialState = {currentScreenPath: ""};
