import {Reducer} from "redux";
import {IAppAction} from "./epics";
import {CurrentUserState} from "./models/currentUser/constants";
import currentCurrentUserReducer from "./models/currentUser/reducers";
import {AssessmentState} from "./models/assessments/constants";
import assessmentsReducer from "./models/assessments/reducers";
import {HealthAuthorityState} from "./models/healthAuthorities/constants";
import healthAuthorityReducer from "./models/healthAuthorities/reducer";

// @ts-ignore this should work
// export type AppDispatch = any; //Dispatch<WedImageAction>;

export type ReducerMap<S, A extends IAppAction = any> = {
    [K in keyof S]: Reducer<S[K], A>;
};

export interface IAppSharedState {
    assessments: AssessmentState;
    currentUser: CurrentUserState;
    healthAuthorities: HealthAuthorityState;
}

const appSharedReducers: ReducerMap<IAppSharedState> = {
    assessments: assessmentsReducer,
    currentUser: currentCurrentUserReducer,
    healthAuthorities: healthAuthorityReducer,
};

export default appSharedReducers;
