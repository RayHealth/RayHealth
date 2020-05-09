import {
    CURRENT_USER,
    CurrentAccountActions,
    CurrentUserState,
    defaultCurrentUser,
} from "./constants";
import {APP} from "../resetStoreActions";

const currentCurrentUserReducer = (
    state: CurrentUserState = defaultCurrentUser,
    action: CurrentAccountActions,
): CurrentUserState => {
    switch (action.type) {
        case APP.RESET_STORE:
            return defaultCurrentUser;
        case CURRENT_USER.NAME_SUCCESS:
            return {...state, name: action.name};
        case CURRENT_USER.BIRTHDAY_SUCCESS:
            return {
                ...state,
                birthMonth: action.birthMonth,
                birthDay: action.birthDay,
                birthYear: action.birthYear,
            };
        case CURRENT_USER.GENDER_SUCCESS:
            return {
                ...state,
                gender: action.gender,
            };
        case CURRENT_USER.PATCH_PRIVACY_SETTINGS:
            return {
                ...state,
                privacy: {...state.privacy, ...action.privacySettings},
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
