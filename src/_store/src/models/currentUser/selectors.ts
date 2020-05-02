import {IAppSharedState} from "../../reducers";
import {AggregatedPrivateInformation, CurrentUser} from "./constants";
import {PrivacySettings} from "./constants";

export const getCurrentUser = (state: IAppSharedState): CurrentUser => state.currentUser;
export const getPrivacySettings = (state: IAppSharedState): PrivacySettings =>
    getCurrentUser(state).privacy;

const twoDigitsOnly = (num: number): number => Math.round(num * 100) / 100;
const epochToYears = (msSinceEpoch: number): number =>
    twoDigitsOnly(msSinceEpoch / 1000 / 60 / 60 / 24 / 365.25);
const getCurrentAgeInYears = (user: CurrentUser): number =>
    epochToYears(
        Date.now() -
            new Date(
                `${user.birthYear}-${user.birthMonth || "01"}-${user.birthDay || "01"}`,
            ).getTime(),
    );
const whatAgeRange = (age: number) => {
    if (age < 10) return "<10";
    if (age < 20) return "10-19";
    if (age < 30) return "20-29";
    if (age < 40) return "30-39";
    if (age < 50) return "40-49";
    if (age < 60) return "50-59";
    if (age < 70) return "60-69";
    return "80+";
};

export const getAggregateUserData = (
    state: IAppSharedState,
): AggregatedPrivateInformation => {
    const user = getCurrentUser(state);
    const privateSettings = getPrivacySettings(state);
    const exactAge = user.birthYear ? getCurrentAgeInYears(user) : undefined;
    return {
        age: privateSettings.shareAgeExact ? exactAge : undefined,
        ageRange:
            privateSettings.shareAgeRange && exactAge
                ? whatAgeRange(exactAge)
                : undefined,
        gender: privateSettings.shareGender && user.gender ? user.gender : undefined,
        ethnicity:
            privateSettings.shareEthnicity && user.ethnicity ? user.ethnicity : undefined,
    };
};

export const getCurrentUserName = (state: IAppSharedState): string =>
    getCurrentUser(state).name;
