import {IAppSharedState} from "../../reducers";
import {CurrentUser} from "./constants";

export const getCurrentUser = (state: IAppSharedState): CurrentUser => state.currentUser;
export const getCurrentUsersPermissionToSharePersonalData = (
    state: IAppSharedState,
): boolean => getCurrentUser(state).permissionToSharePersonalData;
export const getCurrentUsersPermissionToShareAggregateData = (
    state: IAppSharedState,
): boolean => getCurrentUser(state).permissionToShareAggregateData;
