import appSharedReducers, {IAppSharedState, ReducerMap} from "@reduxShared/reducers";
import {combineReducers, Reducer} from "redux";
import rnAppStateReducer from "./models/appState/reducer";
import {IAppState} from "./models/appState/constants";

export interface IAppRnState extends IAppSharedState {
    rnAppState: IAppState;
}

const appRnReducers: ReducerMap<IAppRnState> = {
    ...appSharedReducers,
    rnAppState: rnAppStateReducer,
};
export const appRnReducer: Reducer<IAppRnState> = combineReducers(appRnReducers);
