import {CURRENT_USER, Gender, PrivacySettings} from "./constants";
import {TermsAndConditionsVersion} from "./termsAndConditions";

export interface CurrentUserNameSuccess {
    type: CURRENT_USER.NAME_SUCCESS;
    name: string;
}
export const setCurrentUserNameSuccess = (name: string): CurrentUserNameSuccess => ({
    type: CURRENT_USER.NAME_SUCCESS,
    name,
});
export interface CurrentUserBirthdaySuccess {
    type: CURRENT_USER.BIRTHDAY_SUCCESS;
    birthMonth?: number;
    birthDay?: number;
    birthYear?: number;
}
export const setCurrentUserBirthdaySuccess = (
    birthYear?: number,
    birthMonth?: number,
    birthDay?: number,
): CurrentUserBirthdaySuccess => ({
    type: CURRENT_USER.BIRTHDAY_SUCCESS,
    birthYear,
    birthMonth,
    birthDay,
});
export interface CurrentUserGenderSuccess {
    type: CURRENT_USER.GENDER_SUCCESS;
    gender?: Gender;
}
export const setCurrentUserGenderSuccess = (
    gender?: Gender,
): CurrentUserGenderSuccess => ({
    type: CURRENT_USER.GENDER_SUCCESS,
    gender,
});

export interface PatchCurrentUserPrivacySettings {
    type: CURRENT_USER.PATCH_PRIVACY_SETTINGS;
    privacySettings: Partial<PrivacySettings>;
}
export const patchCurrentUserPrivacySettings = (
    privacySettings: Partial<PrivacySettings>,
): PatchCurrentUserPrivacySettings => ({
    type: CURRENT_USER.PATCH_PRIVACY_SETTINGS,
    privacySettings,
});

export interface CurrentUserAcceptTacSuccess {
    type: CURRENT_USER.ACCEPT_TAC_SUCCESS;
    versionOfTermsAndConditionsAccepted: TermsAndConditionsVersion;
}
export const setCurrentUserAcceptTacSuccess = (
    versionOfTermsAndConditionsAccepted: TermsAndConditionsVersion,
): CurrentUserAcceptTacSuccess => ({
    type: CURRENT_USER.ACCEPT_TAC_SUCCESS,
    versionOfTermsAndConditionsAccepted,
});
