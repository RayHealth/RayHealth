import {AppSharedEpic, appSharedEpics, IAppAction} from "@reduxShared/epics";
import {combineEpics} from "redux-observable";
import {IAppRnState} from "./rnReducers";

export type AppRnEpics<
    Input extends IAppAction = IAppAction,
    Output extends IAppAction = IAppAction
> = AppSharedEpic<Input, Output, IAppRnState>;

// @ts-ignore
export const appRnEpics = <AppRnEpics>combineEpics(appSharedEpics);
