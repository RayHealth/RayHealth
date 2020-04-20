import {ActionsObservable, combineEpics, StateObservable} from "redux-observable";
import {fromPromise} from "rxjs/internal-compatibility";
import {Observable} from "rxjs";
import apiFetchPromise, {IApiFetchResponse} from "./services/apiFetch";
import {IAppSharedState} from "./reducers";

import {IEndpointObject} from "./services/apiEndpoints";
import {IAppErrorAction} from "./services/errorObservable";

export type GetAuthorization = () => Promise<string>;
export const apiFetchBuilder = (getAuthorization: GetAuthorization) => <T>(
    apiConstant: IEndpointObject,
    body?: {[key: string]: string | number},
): Observable<IApiFetchResponse<T>> =>
    fromPromise(apiFetchPromise(getAuthorization, apiConstant, body));

export type IAppSharedEpicDependency = {
    apiFetch: <T>(
        api_constant: IEndpointObject,
        body?: {[key: string]: string | number},
    ) => Observable<IApiFetchResponse<T>>;
};

export type IAppAction = {type: string; [key: string]: any};

export type AppSharedEpic<
    Input extends IAppAction = IAppAction,
    Output extends IAppAction = IAppAction,
    State = IAppSharedState,
    Dependencies = IAppSharedEpicDependency
> = (
    action$: ActionsObservable<Input>,
    state$: StateObservable<State>,
    dependencies: Dependencies,
) => Observable<Output | IAppErrorAction>;

// @ts-ignore-next-line
export const appSharedEpics: AppSharedEpic = <AppSharedEpic>combineEpics();
