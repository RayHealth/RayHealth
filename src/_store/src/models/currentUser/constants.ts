import {
    CurrentUserAcceptTacSuccess,
    CurrentUserBirthdaySuccess,
    CurrentUserNameSuccess,
    PatchCurrentUserPrivacySettings,
} from "./actions";
import {AssessmentInitialize} from "../assessments/actions";
import {ResetStore} from "../resetStoreActions";

export const DEFAULT_NAME = "Anonymous Corona Virus Fighter";

export enum CURRENT_USER {
    NAME_SUCCESS = "currentUser/CURRENT_USER_SET_NAME",
    BIRTHDAY_SUCCESS = "currentUser/CURRENT_USER_BIRTH_DATE",
    PATCH_PRIVACY_SETTINGS = "currentUser/PATCH_PRIVACY_SETTINGS",
    ACCEPT_TAC_SUCCESS = "currentUser/CURRENT_USER_ACCEPT_TAC_SUCCESS",
}

export type RandomizedUserCheckinUuid = string;

export type CurrentUserState = CurrentUser;
export interface PrivacySettings {
    shareAgeExact: boolean;
    shareAgeRange: boolean;
    shareGender: boolean;
    shareEthnicity: boolean;
    shareAssessments: boolean;
    shareTripsLocations: boolean;
    shareTripsDetailed: boolean;
}
export interface AggregatedPrivateInformation {
    age?: number;
    ageRange?: string;
    gender?: string;
    ethnicity?: string;
}
export interface CurrentUser {
    name: string;
    birthMonth?: number;
    birthDay?: number;
    birthYear?: number;
    gender?: string;
    ethnicity?: string;
    privacy: PrivacySettings;
    acceptanceOfTermsAndConditions: boolean;
}
export const defaultCurrentUser: CurrentUser = {
    name: DEFAULT_NAME,
    privacy: {
        shareAgeExact: false,
        shareAgeRange: false,
        shareGender: false,
        shareEthnicity: false,
        shareAssessments: false,
        shareTripsLocations: true,
        shareTripsDetailed: false,
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
