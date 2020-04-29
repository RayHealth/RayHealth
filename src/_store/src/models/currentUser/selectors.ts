import {IAppSharedState} from "../../reducers";
import {CurrentUser} from "./constants";
import {PrivacySettings} from "./constants";

export const getCurrentUser = (state: IAppSharedState): CurrentUser => state.currentUser;
export const getPrivacySettings = (state: IAppSharedState): PrivacySettings =>
    getCurrentUser(state).privacy;
