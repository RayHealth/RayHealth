import {
    CurrentUserAcceptTacSuccess,
    CurrentUserBirthdaySuccess,
    CurrentUserNameSuccess,
    PatchCurrentUserPrivacySettings,
} from "./actions";
import {AssessmentInitialize} from "../assessments/actions";
import {ResetStore} from "../resetStoreActions";

export enum CURRENT_USER {
    NAME_SUCCESS = "currentUser/CURRENT_USER_SET_NAME",
    BIRTHDAY_SUCCESS = "currentUser/CURRENT_USER_BIRTH_DATE",
    PATCH_PRIVACY_SETTINGS = "currentUser/PATCH_PRIVACY_SETTINGS",
    ACCEPT_TAC_SUCCESS = "currentUser/CURRENT_USER_ACCEPT_TAC_SUCCESS",
}

export type RandomizedUserCheckinUuid = string;

export type CurrentUserState = CurrentUser;
export interface PrivacySettings {
    permissionToShareAge: boolean;
    permissionToShareAgeRange: boolean;
}
export interface CurrentUser {
    givenName?: string;
    familyName?: string;
    birthMonth?: number;
    birthDay?: number;
    birthYear?: number;
    privacy: PrivacySettings;
    acceptanceOfTermsAndConditions: boolean;
}
export const defaultCurrentUser: CurrentUser = {
    privacy: {
        permissionToShareAge: false,
        permissionToShareAgeRange: false,
    },
    acceptanceOfTermsAndConditions: false,
};

export type CurrentAccountActions =
    | ResetStore
    | CurrentUserNameSuccess
    | CurrentUserBirthdaySuccess
    | PatchCurrentUserPrivacySettings
    | CurrentUserAcceptTacSuccess
    | AssessmentInitialize;
