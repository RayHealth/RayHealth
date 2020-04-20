import appSharedReducers, {IAppSharedState, ReducerMap} from "@reduxShared/reducers";
import {combineReducers, Reducer} from "redux";
import rnAppStateReducer from "./models/appState/reducer";
import {IAppState, rnAppStateInitialState} from "./models/appState/constants";
import {initialState as reduxInitialState} from "@reduxShared/index";

export interface IAppRnState extends IAppSharedState {
    rnAppState: IAppState;
}

export const initialState: IAppRnState = {
    ...reduxInitialState,
    rnAppState: rnAppStateInitialState,
};

const appRnReducers: ReducerMap<IAppRnState> = {
    ...appSharedReducers,
    rnAppState: rnAppStateReducer,
};
export const appRnReducer: Reducer<IAppRnState> = combineReducers(appRnReducers);
