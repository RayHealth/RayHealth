import {createEpicMiddleware} from "redux-observable";
import {applyMiddleware, createStore, Middleware, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore, persistReducer, createMigrate} from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import {apiFetchBuilder, IAppAction, IAppSharedEpicDependency} from "@reduxShared/epics";
import {appRnReducer, IAppRnState} from "./rnReducers";
import {appRnEpics} from "./rnEpics";
import rnConfig from "../config";
import {currentMigrationVersion, migrations} from "./migrations";

const epicMiddleware = createEpicMiddleware<
    IAppAction,
    IAppAction,
    IAppRnState,
    IAppSharedEpicDependency
>({
    dependencies: {
        apiFetch: apiFetchBuilder,
    },
});

const middleware: Middleware[] = [];
middleware.push(epicMiddleware);
// middleware.push(crashalyticsAnalyticsWebMiddleware);

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["rnAppState", "healthAuthorities"],
    version: currentMigrationVersion,
    migrate: createMigrate(migrations as any /*types are wrong in package*/, {
        debug: rnConfig.isDevMode,
    }),
};

const persistedReducer = persistReducer(persistConfig, appRnReducer);

const appRnStore = (): Store<IAppRnState> => {
    const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middleware)),
    );
    epicMiddleware.run(appRnEpics as any);
    return store;
};

export const store = appRnStore();
export const persistor = persistStore(store);
