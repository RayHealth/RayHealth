import {IAppRnState} from "../../rnReducers";

export const getCurrentScreenPath = (state: IAppRnState): string =>
    state.rnAppState.currentScreenPath;
