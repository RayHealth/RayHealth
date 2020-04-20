import {CURRENT_USER} from "./constants";

export interface CurrentUserNameSuccess {
    type: CURRENT_USER.NAME_SUCCESS;
    givenName?: string;
    familyName?: string;
}
export const setCurrentUserNameSuccess = (
    givenName?: string,
    familyName?: string,
): CurrentUserNameSuccess => ({
    type: CURRENT_USER.NAME_SUCCESS,
    givenName,
    familyName,
});
export interface CurrentUserBirthdaySuccess {
    type: CURRENT_USER.BIRTHDAY_SUCCESS;
    birthMonth?: number;
    birthDay?: number;
    birthYear?: number;
}
export const setCurrentUserBirthdaySuccess = (
    birthMonth?: number,
    birthDay?: number,
    birthYear?: number,
): CurrentUserBirthdaySuccess => ({
    type: CURRENT_USER.BIRTHDAY_SUCCESS,
    birthMonth,
    birthDay,
    birthYear,
});
export interface CurrentUserPermissionToSharePersonalDataSuccess {
    type: CURRENT_USER.PERMISSION_TO_SHARE_PERSONAL_DATA_SUCCESS;
    permissionToSharePersonalData: boolean;
}
export const setCurrentUserPermissionToSharePersonalDataSuccess = (
    permissionToSharePersonalData: boolean,
): CurrentUserPermissionToSharePersonalDataSuccess => ({
    type: CURRENT_USER.PERMISSION_TO_SHARE_PERSONAL_DATA_SUCCESS,
    permissionToSharePersonalData,
});
export interface CurrentUserPermissionToShareAnonymizedDataSuccess {
    type: CURRENT_USER.PERMISSION_TO_SHARE_ANONYMIZED_DATA_SUCCESS;
    permissionToShareAnonymizedData: boolean;
}
export const setCurrentUserPermissionToShareAnonymizedDataSuccess = (
    permissionToShareAnonymizedData: boolean,
): CurrentUserPermissionToShareAnonymizedDataSuccess => ({
    type: CURRENT_USER.PERMISSION_TO_SHARE_ANONYMIZED_DATA_SUCCESS,
    permissionToShareAnonymizedData,
});
export interface CurrentUserAcceptTacSuccess {
    type: CURRENT_USER.ACCEPT_TAC_SUCCESS;
    acceptanceOfTermsAndConditions: boolean;
}
export const setCurrentUserAcceptTacSuccess = (
    acceptanceOfTermsAndConditions: boolean,
): CurrentUserAcceptTacSuccess => ({
    type: CURRENT_USER.ACCEPT_TAC_SUCCESS,
    acceptanceOfTermsAndConditions,
});
