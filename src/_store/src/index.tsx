import {IAppSharedState} from "./reducers";
import {defaultCurrentUser} from "./models/currentUser/constants";
import {defaultAssessmentsState} from "./models/assessments/constants";

export const initialState: IAppSharedState = {
    assessments: defaultAssessmentsState,
    currentUser: defaultCurrentUser,
};
