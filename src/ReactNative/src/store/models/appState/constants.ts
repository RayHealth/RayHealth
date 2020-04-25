// We need this for analytics, in order to track location changes,
// and to clear things of the screen when the page changes.
import {STYLE} from "../../../config/styleDefaults";
import {TriggerScreenChangeAction} from "./actions";

export const SCREEN_CHANGE = "@@router/SCREEN_CHANGE";

export enum APP_STATE {}

export type IAppState = {
    currentScreenPath: string;
    backgroundColor: string;
};
export const rnAppStateInitialState = {
    currentScreenPath: "",
    backgroundColor: STYLE.SETTINGS.MAIN_BACKGROUND_COLOR,
};

export type AppStateActions = TriggerScreenChangeAction;
