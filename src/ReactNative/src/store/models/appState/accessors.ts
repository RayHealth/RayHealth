import {IAppRnState} from "../../rnReducers";

export const getCurrentScreenPath = (state: IAppRnState): string =>
    state.rnAppState.currentScreenPath;
export const getBackgroundColor = (state: IAppRnState): string =>
    state.rnAppState.backgroundColor;
