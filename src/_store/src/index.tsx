import {IAppSharedState} from "./reducers";
import {defaultCurrentUser} from "./models/currentUser/constants";

export const initialState: IAppSharedState = {
    currentUser: defaultCurrentUser,
};
