// We need this for analytics, in order to track location changes,
// and to clear things of the screen when the page changes.
import {STYLE} from "../../../config/styleDefaults";
import {TriggerScreenChangeAction} from "./actions";

export const SCREEN_CHANGE = "@@router/SCREEN_CHANGE";

export enum APP_STATE {}

export type IAppState = {
    currentScreenPath: string;
    background: BackgroundSettings;
};
export interface BackgroundSettings {
    header: string;
    body: string;
    footer: string;
}
export const rnAppStateInitialState = {
    currentScreenPath: "",
    background: {
        header: STYLE.SETTINGS.BACKGROUND_HEADER_COLOR,
        body: STYLE.SETTINGS.BACKGROUND_BODY_COLOR,
        footer: STYLE.SETTINGS.BACKGROUND_FOOTER_COLOR,
    },
};

export type AppStateActions = TriggerScreenChangeAction;
