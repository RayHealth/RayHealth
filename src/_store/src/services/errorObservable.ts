import {ActionsObservable} from "redux-observable";
import {IAppAction} from "../epics";
import sharedConfig from "../sharedConfig";
import {NoOp} from "../utils/noOp";
import {IFetchErrorResponse} from "./apiFetch";

export type IAppErrorAction = IAppAction;

export const handleErrorAsObservable = ({
    status,
    error,
    response,
    apiConstant,
}: IFetchErrorResponse): ActionsObservable<IAppErrorAction> => {
    if (sharedConfig.isDevMode) {
        console.log("%cNetwork error!", "background: #f00; color: #fff");
        console.log(apiConstant.method, apiConstant.path);
        // console.log("Headers", error.request.headers);
        console.log("error", error);
        console.log("friendlyMessage", error);
        console.log("response", response);
        console.log("======================");
    }
    if (status === 404) {
        console.log("handle404");
    } else if (status === 401) {
        console.log("Why?");
        return ActionsObservable.of(NoOp);
    }
    console.log("handle404");

    return ActionsObservable.of(NoOp);
};
