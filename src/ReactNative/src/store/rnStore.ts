import {createEpicMiddleware} from "redux-observable";
import {applyMiddleware, createStore, Middleware, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {apiFetchBuilder, IAppAction, IAppSharedEpicDependency} from "@reduxShared/epics";
import {appRnReducer, IAppRnState, initialState} from "./rnReducers";
import {appRnEpics} from "./rnEpics";
import getAuthorization from "./getAuthorization";

const epicMiddleware = createEpicMiddleware<
    IAppAction,
    IAppAction,
    IAppRnState,
    IAppSharedEpicDependency
>({
    dependencies: {
        apiFetch: apiFetchBuilder(getAuthorization),
    },
});

const middleware: Middleware[] = [];
middleware.push(epicMiddleware);
// middleware.push(facebookPxMiddleware);
// middleware.push(firebaseAnalyticsWebMiddleware);
// middleware.push(crashalyticsAnalyticsWebMiddleware);

const appRnStore = (): Store<IAppRnState> => {
    const store = createStore(
        appRnReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware)),
    );
    epicMiddleware.run(appRnEpics as any);

    return store;
};

export default appRnStore();
