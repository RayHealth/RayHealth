import {IAppSharedState} from "../../reducers";
import {CurrentUser} from "./constants";

export const getCurrentUser = (state: IAppSharedState): CurrentUser => state.currentUser;
