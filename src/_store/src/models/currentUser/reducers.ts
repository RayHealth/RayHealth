import {
    CURRENT_USER,
    CurrentAccountActions,
    CurrentUserState,
    defaultCurrentUser,
} from "./constants";

const currentCurrentUserReducer = (
    state: CurrentUserState = defaultCurrentUser,
    action: CurrentAccountActions,
): CurrentUserState => {
    switch (action.type) {
        case CURRENT_USER.NAME_SUCCESS:
            return {...state, givenName: action.givenName, familyName: action.familyName};
        case CURRENT_USER.BIRTHDAY_SUCCESS:
            return {
                ...state,
                birthMonth: action.birthMonth,
                birthDay: action.birthDay,
                birthYear: action.birthYear,
            };
        case CURRENT_USER.PERMISSION_TO_SHARE_PERSONAL_DATA_SUCCESS:
            return {
                ...state,
                permissionToSharePersonalData: action.permissionToSharePersonalData,
            };
        case CURRENT_USER.PERMISSION_TO_SHARE_ANONYMIZED_DATA_SUCCESS:
            return {
                ...state,
                permissionToShareAnonymizedData: action.permissionToShareAnonymizedData,
            };
        case CURRENT_USER.ACCEPT_TAC_SUCCESS:
            return {
                ...state,
                acceptanceOfTermsAndConditions: action.acceptanceOfTermsAndConditions,
            };
        default:
            return state;
    }
};

export default currentCurrentUserReducer;
