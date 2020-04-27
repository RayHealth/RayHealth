import {IAppRnState} from "../../rnReducers";
import {BackgroundSettings} from "./constants";

export const getCurrentScreenPath = (state: IAppRnState): string =>
    state.rnAppState.currentScreenPath;
export const getBackgroundColors = (state: IAppRnState): BackgroundSettings =>
    state.rnAppState.background;
