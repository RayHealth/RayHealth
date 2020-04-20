import {Reducer} from "redux";
import {IAppAction} from "./epics";
import {CurrentUserState} from "./models/currentUser/constants";
import currentCurrentUserReducer from "./models/currentUser/reducers";
import {AssessmentState} from "./models/assessments/constants";
import assessmentReducer from "./models/assessments/reducers";

// @ts-ignore this should work
// export type AppDispatch = any; //Dispatch<WedImageAction>;

export type ReducerMap<S, A extends IAppAction = any> = {
    [K in keyof S]: Reducer<S[K], A>;
};

export interface IAppSharedState {
    assessments: AssessmentState;
    currentUser: CurrentUserState;
}

const appSharedReducers: ReducerMap<IAppSharedState> = {
    assessments: assessmentReducer,
    currentUser: currentCurrentUserReducer,
};

export default appSharedReducers;
